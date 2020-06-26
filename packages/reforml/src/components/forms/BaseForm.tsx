import React, { ReactElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FieldComponent, FieldComponents, Fields, FormValue } from '../../types'
import { useFieldComponents } from '../FieldComponentsContext'
import { mergeDefaultValue } from '../../utils/mergeDefaultValue'
import { useBaseComponents } from '../BaseComponentsContext'

export const BaseFormPropTypes = {
  onChange: PropTypes.func,
  fields: PropTypes.object,
  value: PropTypes.object
}

export interface BaseFormProps<T extends FormValue> {
  onChange: (value: T) => unknown
  fields: Fields
  value: T
}

export function BaseForm<T extends FormValue> ({
  onChange,
  fields,
  value
}: BaseFormProps<T>): ReactElement<BaseFormProps<T>> {
  const Components: FieldComponents = useFieldComponents()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const initialValue: T = value || {}
    const flag = mergeDefaultValue(fields, initialValue)
    if (flag) {
      onChange({ ...initialValue })
    }
  }, [])
  const handleChange = (fieldName: string, fieldValue: unknown): void => {
    onChange({ ...value, [fieldName]: fieldValue })
  }
  const { FieldWrapper } = useBaseComponents()
  return (
    // TODO: IDK how to remove this fragment without conflicting the type
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <React.Fragment>
      {Object.entries(fields).map(([fieldName, field]) => {
        if (field.type === undefined) {
          throw Error(`'type' attribute is missing in field ${fieldName}`)
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const Component: FieldComponent<unknown> | undefined = Components[field.type]
        if (Component === undefined) {
          throw Error(`'type' attribute is missing in field ${fieldName}`)
        }

        function changeHandler<U> (param: U | (React.ChangeEvent<unknown> & {
          target: { value: U }
        })): void {
          if (typeof param === 'object') {
            if ('target' in param) {
              handleChange(fieldName, param.target.value)
            } else {
              handleChange(fieldName, param)
            }
          } else {
            handleChange(fieldName, param)
          }
        }

        return (
          <FieldWrapper key={fieldName}>
            <Component
              {...field}
              value={value[fieldName]}
              name={fieldName}
              onChange={changeHandler}
            />
          </FieldWrapper>
        )
      })}
    </React.Fragment>
  )
}

BaseForm.propTypes = BaseFormPropTypes
