import { FunctionComponent } from 'react'
import { BasicField, BasicFieldPropTypes, CommonFieldComponentProps } from './basic'
import PropTypes from 'prop-types'

/**
 * DigKey type
 * Dig value from array of object
 * string is to direct access
 * string array is to dig through the nested structure
 */
export type DigKey = string | string[]

export const DigKeyPropType = PropTypes.oneOfType([PropTypes.array, PropTypes.string])

export type Option<T> = {
  [key: string]: unknown | T
} | T

export type Options<T> = { [label: string]: T } | Array<Option<T>>

export interface OptionsField<T> extends BasicField<T> {
  options?: Options<T>
  valueKey?: DigKey
  labelKey?: DigKey
}

export type OptionsFieldComponentProps<T> = CommonFieldComponentProps<T> & OptionsField<T>
export type OptionsFieldComponent<T> = FunctionComponent<OptionsFieldComponentProps<T>>

export const OptionsFieldPropTypes = {
  ...BasicFieldPropTypes,
  options: PropTypes.array,
  valueKey: DigKeyPropType,
  labelKey: DigKeyPropType
}

export const BaseSelectPropTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired
}

export type BaseSelectComponent<T> = FunctionComponent<CommonFieldComponentProps<T> & { options: Array<{ label: string, value: T }>, placeholder?: string }>
