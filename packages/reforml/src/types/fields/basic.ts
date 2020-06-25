import { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import { FieldComponentProps } from './index'
import { ValueCallback } from '../ValueCallback'

export interface BasicField<T> {
  type?: string
  label?: string
  disabled?: boolean
  defaultVal?: T
  helperText?: string
}

export interface CommonFieldComponentProps<T> {
  onChange?: ValueCallback<T>
  value?: T
  name?: string
}

export type BasicFieldComponentProps<T> = CommonFieldComponentProps<T> & BasicField<T>

export type BasicFieldComponent<T> = FunctionComponent<FieldComponentProps<T>>

/**
 * PropTypes of a field component
 */
export const BasicFieldPropTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string
}
