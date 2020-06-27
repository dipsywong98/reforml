import { FunctionComponent } from 'react'
import { BasicField, CommonFieldComponentProps } from './basic'
import PropTypes from 'prop-types'
import { Field, FieldPropTypes } from './index'

export interface ListField<T extends unknown[]> extends BasicField<T> {
  of?: string | Field<unknown>
  deletable?: boolean
  editable?: boolean
  creatable?: boolean
}

export type ListFieldComponentProps<T extends unknown[]> = CommonFieldComponentProps<T> & ListField<T>
export type ListFieldComponent<T extends unknown[]> = FunctionComponent<ListFieldComponentProps<T>>

export const ListFieldPropTypes = {
  of: PropTypes.oneOfType([PropTypes.string, PropTypes.shape(FieldPropTypes)]),
  deletable: PropTypes.bool,
  editable: PropTypes.bool,
  creatable: PropTypes.bool
}
