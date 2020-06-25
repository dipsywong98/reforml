import { TextInput } from './TextInput'
import { FieldComponents } from '../../types'
import { NumberInput } from './NumberInput'
import { Select } from './Select'
import React, { FunctionComponent } from 'react'

const FieldWrapper: FunctionComponent = ({ ...props }) => <div className='form-group' {...props} />

export const DefaultComponents: FieldComponents = {
  text: TextInput,
  number: NumberInput,
  select: Select,
  FieldWrapper
}
