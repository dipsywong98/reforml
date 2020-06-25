import { FunctionComponent } from 'react'
import { FieldComponent } from './fields'

/**
 * Type of lookup dictionary of field components
 */
export interface FieldComponents {
  text: FieldComponent<string>
  number: FieldComponent<number>
  select: FieldComponent<number | string>
  HelperText: FunctionComponent
  LabelText: FunctionComponent
  FieldWrapper: FunctionComponent
  [type: string]: FunctionComponent
}
