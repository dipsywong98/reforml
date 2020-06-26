import { TextInput } from './TextInput'
import { FieldComponents } from '../../types'
import { NumberInput } from './NumberInput'
import { Select } from './Select'
import { Checkbox } from './Checkbox'

export const DefaultFieldComponents: FieldComponents = {
  text: TextInput,
  number: NumberInput,
  select: Select,
  checkbox: Checkbox
}
