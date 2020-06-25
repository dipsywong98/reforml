import React, { ReactElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FieldComponent, FieldComponents, Fields, FormValue, ValueCallback } from '../../types'
import { useComponents } from '../ReformlContext'
import { mergeDefaultValue } from '../../utils/mergeDefaultValue'

export const BaseFormPropTypes = {
  onChange: PropTypes.func,
  fields: PropTypes.object,
  value: PropTypes.object
}

export interface BaseFormProps<T extends FormValue> {
  onChange: ValueCallback<T>
  fields: Fields
  value: T
}

export function BaseForm<T extends FormValue> ({
                                                 onChange,
                                                 fields,
                                                 value
                                               }: BaseFormProps<T>): ReactElement<BaseFormProps<T>> {
  const Components: FieldComponents = useComponents()
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
  return (
    // TODO: IDK how to remove this fragment without conflicting the type
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <React.Fragment>
      {Object.entries(fields).map(([fieldName, field]) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const Component: FieldComponent<unknown> = Components[field.type]

        function changeHandler<U> (param: React.ChangeEvent<unknown> & {
          target: { value: U }
        }): void
        function changeHandler<U> (param: U): void

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
          <Component
            key={fieldName}
            {...field}
            value={value[fieldName]}
            name={fieldName}
            onChange={changeHandler}
          />
        )
      })}
    </React.Fragment>
  )
}

BaseForm.propTypes = BaseFormPropTypes
