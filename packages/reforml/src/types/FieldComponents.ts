import { FunctionComponent } from 'react'
import { FieldComponent, MultiSelectFieldComponent, MultiSelectValue, OptionsFieldComponent } from './fields'

/**
 * Type of lookup dictionary of field components
 */
export interface FieldComponents {
  text: FieldComponent<string>
  number: FieldComponent<number>
  select: OptionsFieldComponent<number | string>
  checkbox: FieldComponent<unknown>
  checkbox_group: MultiSelectFieldComponent<MultiSelectValue<unknown>>
  [type: string]: FunctionComponent<unknown> | undefined
}
