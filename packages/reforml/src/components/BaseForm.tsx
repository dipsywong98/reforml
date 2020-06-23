import React, { ReactElement, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FieldComponent, FieldComponents, Fields, FormValue, ValueCallback } from '../type'
import { useComponents } from './ReformlContext'
import { mergeDefaultValue } from '../utils/mergeDefaultValue'

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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const Component: FieldComponent<unknown> = Components[field.type]
        return (
          <Component
            key={fieldName}
            {...field}
            value={value[fieldName]}
            name={fieldName}
            onChange={(value: unknown) => handleChange(fieldName, value)}
          />
        )
      })}
    </React.Fragment>
  )
}

BaseForm.propTypes = BaseFormPropTypes
