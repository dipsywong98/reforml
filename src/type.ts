import { FunctionComponent } from 'react'
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

/**
 * Type of a field component
 */
export type FieldComponent<T> = FunctionComponent<{
  onChange: (value: T, event?: Event) => unknown
  value?: T
  name?: string
} & Field<T>>

/**
 * Type of lookup dictionary of field components
 */
export interface FieldComponents {
  text: FieldComponent<string>
}

/**
 * The shape that reforml value should look like
 */
export interface FormValue {
  [fieldName: string]: unknown
}
