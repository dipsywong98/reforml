import { FunctionComponent } from 'react'
import { BasicField, CommonFieldComponentProps } from './basic'
import PropTypes from 'prop-types'
import { Field } from './index'

export interface ListField<T> extends BasicField<T[]> {
  of?: string | Field<T>
  inlineDelete?: boolean
  deletable?: boolean
  editable?: boolean
  creatable?: boolean
  defaultNewVal?: T
  createLabel?: string
}

export type ListFieldComponentProps<T> = CommonFieldComponentProps<T[]> & ListField<T>
export type ListFieldComponent<T> = FunctionComponent<ListFieldComponentProps<T>>

export const ListFieldPropTypes = {
  of: PropTypes.any,
  deletable: PropTypes.bool,
  editable: PropTypes.bool,
  creatable: PropTypes.bool,
  defaultNewVal: PropTypes.any,
  createLabel: PropTypes.string,
  createPlaceholder: PropTypes.string,
  inlineDelete: PropTypes.bool
}
