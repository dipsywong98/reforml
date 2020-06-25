import { TextInput } from './TextInput'
import { FieldComponents } from '../../types'
import { NumberInput } from './NumberInput'
import { Select } from './Select'
import React, { FunctionComponent } from 'react'

const HelperText: FunctionComponent = ({ ...props }) => <small {...props} />

const Label: FunctionComponent = ({ ...props }) => <label {...props} />

export const DefaultComponents: FieldComponents = {
  text: TextInput,
  number: NumberInput,
  select: Select,
  helperText: HelperText,
  label: Label
}
