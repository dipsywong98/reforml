import { FunctionComponent } from 'react'
import {
  BasicFieldComponent,
  FieldComponent,
  MultiSelectFieldComponent,
  MultiSelectValue,
  OptionsFieldComponent
} from './fields'

/**
 * Type of lookup dictionary of field components
 */
export interface FieldComponents {
  text: BasicFieldComponent<string>
  number: BasicFieldComponent<number>
  select: OptionsFieldComponent<unknown>
  checkbox: FieldComponent<unknown>
  checkbox_group: MultiSelectFieldComponent<MultiSelectValue<unknown>>
  [type: string]: FunctionComponent<unknown> | undefined
}
