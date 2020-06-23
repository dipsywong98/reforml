import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * Definition of field dictionary
 */
export interface Fields {
  [fieldName: string]: Field<unknown>
}

/**
 * Definition of a Field in yaml
 */
export interface Field<T> {
  type: 'text' | 'number'
  label?: string
  disabled?: boolean
  default?: T
  helperText?: string
}

/**
 * PropTypes of a field component
 */
export const FieldPropTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  helperText: PropTypes.string,
  name: PropTypes.string
}

export type ValueCallback<T> = (value: T, event?: React.ChangeEvent<unknown>|undefined) => unknown

/**
 * Type of a field component
 */
export type FieldComponent<T> = FunctionComponent<{
  onChange: ValueCallback<T>
  value?: T
  name?: string
} & Field<T>>

/**
 * Type of lookup dictionary of field components
 */
export interface FieldComponents {
  text: FieldComponent<string>
  number: FieldComponent<number>
}

/**
 * The shape that reforml value should look like
 */
export interface FormValue {
  [fieldName: string]: unknown
}
