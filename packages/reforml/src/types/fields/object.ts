import { FunctionComponent } from 'react'
import { BasicField, BasicFieldPropTypes, CommonFieldComponentProps } from './basic'
import PropTypes from 'prop-types'
import { FormValue } from '../FormValue'
import { Fields } from './index'

export interface ObjectField<T extends FormValue> extends BasicField<T> {
  fields?: Fields
}

export type ObjectFieldComponentProps<T extends FormValue> = CommonFieldComponentProps<T> & ObjectField<T>
export type ObjectFieldComponent<T extends FormValue> = FunctionComponent<ObjectFieldComponentProps<T>>

export const ObjectFieldPropTypes = {
  ...BasicFieldPropTypes,
  fields: PropTypes.any
}
