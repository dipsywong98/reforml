import { FunctionComponent } from 'react'
import { BasicField, BasicFieldPropTypes, CommonFieldComponentProps } from './basic'
import PropTypes from 'prop-types'
import { FormValue } from '../FormValue'
import { Field, Fields } from './index'

export interface ObjectField<T extends FormValue> extends BasicField<T> {
  fields?: Fields
}

export const isObjectField = <T>(field: Field<T>): field is ObjectField<FormValue> => {
  return field.type === 'object'
}

export type ObjectFieldComponentProps<T extends FormValue> = CommonFieldComponentProps<T> & ObjectField<T>
export type ObjectFieldComponent<T extends FormValue> = FunctionComponent<ObjectFieldComponentProps<T>>

export const ObjectFieldPropTypes = {
  ...BasicFieldPropTypes,
  fields: PropTypes.any
}
