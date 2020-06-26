import { TextInput } from './TextInput'
import { FieldComponents } from '../../types'
import { NumberInput } from './NumberInput'
import { Select } from './Select'
import React, { FunctionComponent } from 'react'
import { Checkbox } from './Checkbox'

const FieldWrapper: FunctionComponent = ({ ...props }) => <div className='form-group' {...props} />

export const DefaultComponents: FieldComponents = {
  text: TextInput,
  number: NumberInput,
  select: Select,
  checkbox: Checkbox,
  FieldWrapper
}
