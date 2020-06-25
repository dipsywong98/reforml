import { FunctionComponent } from 'react'
import { FieldComponent } from './fields'

/**
 * Type of lookup dictionary of field components
 */
export type FieldComponents<T = { [type: string]: FieldComponent<unknown> }> = {
  text: FieldComponent<string>
  number: FieldComponent<number>
  select: FieldComponent<number | string>
  HelperText: FunctionComponent
  LabelText: FunctionComponent
  FieldWrapper: FunctionComponent
} | T
