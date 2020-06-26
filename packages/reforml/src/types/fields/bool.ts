import { FunctionComponent } from 'react'
import { BasicField, CommonFieldComponentProps } from './basic'

export interface BoolField<T> extends BasicField<T>{
  trueValue?: T
  falseValue?: T
}

export type BoolFieldComponentProps<T> = CommonFieldComponentProps<T> & BoolField<T>
export type BoolFieldComponent<T> = FunctionComponent<BoolFieldComponentProps<T>>
