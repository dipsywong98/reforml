import { FunctionComponent } from 'react'
import { BasicField, CommonFieldComponentProps } from './basic'
import PropTypes from 'prop-types'

export interface BoolField<T> extends BasicField<T> {
  trueValue?: T
  falseValue?: T
}

export type BoolFieldComponentProps<T> = CommonFieldComponentProps<T> & BoolField<T>
export type BoolFieldComponent<T> = FunctionComponent<BoolFieldComponentProps<T>>

export const BaseBoolPropTypes = {
  checked: PropTypes.bool
}

export type BaseBoolComponent<T> = FunctionComponent<CommonFieldComponentProps<T> & { checked?: boolean }>
