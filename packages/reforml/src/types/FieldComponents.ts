import { FunctionComponent } from 'react'
import { FieldComponent } from './fields'

/**
 * Type of lookup dictionary of field components
 */
export interface FieldComponents {
  text: FieldComponent<string>
  number: FieldComponent<number>
  select: FieldComponent<number | string>
  [type: string]: FunctionComponent<unknown> | undefined
}
