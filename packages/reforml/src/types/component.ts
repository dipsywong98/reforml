import PropTypes from 'prop-types'
import React, { FunctionComponent } from 'react'
import { Field } from './schema'

/**
 * PropTypes of a field component
 */
export const FieldPropTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string
}

export type ValueCallback<T> = ((param: T | (
  React.ChangeEvent<unknown> &
  {
    target: { value: T }
  })) => unknown)

export type FieldComponentProps<T> = {
  onChange?: ValueCallback<T>
  value?: T
  name?: string
} & Field<T>

/**
 * Type of a field component
 */
export type FieldComponent<T> = FunctionComponent<FieldComponentProps<T>>

/**
 * Type of lookup dictionary of field components
 */
export type FieldComponents<T = { [type: string]: FieldComponent<never> }> = {
  text: FieldComponent<string>
  number: FieldComponent<number>
  select: FieldComponent<number | string>
  helperText: FunctionComponent
  label: FunctionComponent
} | T
