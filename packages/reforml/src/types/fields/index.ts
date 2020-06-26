import { FunctionComponent } from 'react'
import { OptionsField } from './options'
import { BasicField, BasicFieldPropTypes, CommonFieldComponentProps } from './basic'
import { BoolField } from './bool'
import { MultiSelectField, MultiSelectValue } from './multiSelect'

/**
 * Definition of any Field in yaml
 * Update this when new field is added
 */
export type Field<T> = BasicField<T> | OptionsField<T> | BoolField<T> | MultiSelectField<MultiSelectValue<T>>

/**
 * Definition of field dictionary
 */
export interface Fields {
  [fieldName: string]: Field<unknown>
}

export type FieldComponentProps<T> = CommonFieldComponentProps<T> & Field<T>
export type FieldComponent<T> = FunctionComponent<FieldComponentProps<T> & { [prop: string]: unknown }>
export type BaseFieldComponent<T> = FunctionComponent<CommonFieldComponentProps<T>>

/**
 * PropTypes of a field component
 */
export const FieldPropTypes = {
  ...BasicFieldPropTypes
}

export * from './basic'
export * from './options'
export * from './multiSelect'
