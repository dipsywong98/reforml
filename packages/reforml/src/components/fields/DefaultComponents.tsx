import { TextInput } from './TextInput'
import { FieldComponents } from '../../types'
import { NumberInput } from './NumberInput'
import { Select } from './Select'
import React, { FunctionComponent } from 'react'

const HelperText: FunctionComponent = ({ ...props }) => <small className='form-text text-muted' {...props} />

const LabelText: FunctionComponent = ({ ...props }) => <label className='label-text' {...props} />

const FieldWrapper: FunctionComponent = ({ ...props }) => <div className='form-group' {...props} />

export const DefaultComponents: FieldComponents = {
  text: TextInput,
  number: NumberInput,
  select: Select,
  HelperText,
  LabelText,
  FieldWrapper
}
