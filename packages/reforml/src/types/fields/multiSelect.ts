import { FunctionComponent } from 'react'
import { CommonFieldComponentProps } from './basic'
import PropTypes from 'prop-types'
import { OptionsField, OptionsFieldPropTypes } from './options'
import { BoolField } from './bool'

export type MultiSelectOutput = 'set' | 'array' | 'object'

export interface MultiSelectField<T extends MultiSelectValue<unknown>> extends OptionsField<T>, BoolField<T> {
  output?: MultiSelectOutput
}

export type MultiSelectFieldComponentProps<T extends MultiSelectValue<unknown>> = CommonFieldComponentProps<T> & MultiSelectField<T>
export type MultiSelectFieldComponent<T extends MultiSelectValue<unknown>> = FunctionComponent<MultiSelectFieldComponentProps<T>>

export const MultiSelectFieldPropTypes = {
  ...OptionsFieldPropTypes,
  output: PropTypes.string
}

export type MultiSelectValue<T> = Set<T> | T[] | Record<string | number, boolean>
