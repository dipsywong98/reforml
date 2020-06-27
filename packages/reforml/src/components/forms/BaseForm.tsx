import React, { ReactElement, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { FieldComponent, FieldComponents, Fields, FormValue } from '../../types'
import { useFieldComponents } from '../FieldComponentsContext'
import { mergeDefaultValue } from '../../utils/mergeDefaultValue'
import { useBaseComponents } from '../BaseComponentsContext'
import { getComponent } from '../../utils/getComponent'
import { generalizeValueCallback } from '../../utils/generalizeValueCallback'

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
  const appliedDefault = useRef<boolean>(false)
  let flag = false
  if (!appliedDefault.current) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    flag = mergeDefaultValue(fields, value)
    appliedDefault.current = true
  }
  useEffect(() => {
    if (flag) {
      onChange({ ...value })
    }
  }, [flag])
  const handleChange = (fieldName: string, fieldValue: unknown): void => {
    onChange({ ...value, [fieldName]: fieldValue })
  }
  const { FieldWrapper } = useBaseComponents()
  return (
    // TODO: IDK how to remove this fragment without conflicting the type
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <React.Fragment>
      {Object.entries(fields).map(([fieldName, field]) => {
        const Component: FieldComponent<unknown> = getComponent(Components, field, fieldName)

        const changeHandler = generalizeValueCallback((value) => handleChange(fieldName, value))

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
