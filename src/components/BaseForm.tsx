import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { FieldComponent, Fields, FormValue } from '../type'
import { useComponents } from './ReformlContext'

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
  const Components = useComponents()
  const handleChange = (fieldName: string, fieldValue: unknown): void => {
    onChange({ ...value, [fieldName]: fieldValue })
  }
  return (
    // TODO: IDK how to remove this fragment without conflicting the type
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <React.Fragment>
      {Object.entries(fields).map(([fieldName, field]) => {
        const Component: FieldComponent<unknown> = Components[field.type]
        return (
          <Component
            key={fieldName}
            {...field}
            value={value[fieldName]}
            onChange={(value: unknown) => handleChange(fieldName, value)}
          />
        )
      })}
    </React.Fragment>
  )
}

BaseForm.propTypes = BaseFormPropTypes
