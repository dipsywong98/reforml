import { FunctionComponent } from 'react'
import { OptionsField } from './options'
import { BasicField, BasicFieldPropTypes, CommonFieldComponentProps } from './basic'
import { BoolField } from './bool'

/**
 * Definition of any Field in yaml
 */
export type Field<T> = BasicField<T> | OptionsField<T> | BoolField<T>

/**
 * Definition of field dictionary
 */
export interface Fields {
  [fieldName: string]: Field<unknown>
}

export type FieldComponentProps<T> = CommonFieldComponentProps<T> & Field<T>
export type FieldComponent<T> = FunctionComponent<FieldComponentProps<T>>

/**
 * PropTypes of a field component
 */
export const FieldPropTypes = {
  ...BasicFieldPropTypes
}

export * from './basic'
export * from './options'
