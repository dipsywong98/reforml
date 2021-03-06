import { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import { ValueEventCallback } from '../ValueEventCallback'
import { FieldValidateError } from '../ValidateErrors'
import { IfFieldType } from '../IfFieldKey'

export interface BasicField<T> {
  type?: string
  label?: string
  disabled?: boolean
  defaultVal?: T
  helperText?: string
  placeholder?: string
  createLabel?: string
  inlineDelete?: boolean
  required?: boolean
  showIf?: IfFieldType
  [key: string]: unknown | undefined
  [key: number]: unknown | undefined
}

export interface CommonFieldComponentProps<T> {
  onChange?: ValueEventCallback<T>
  value?: T
  name?: string
  errors?: FieldValidateError
}

export type BasicFieldComponentProps<T> = CommonFieldComponentProps<T> & BasicField<T>

export type BasicFieldComponent<T> = FunctionComponent<BasicFieldComponentProps<T>>

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
