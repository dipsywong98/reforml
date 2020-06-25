import { TextInput } from './TextInput'
import { FieldComponents } from '../../types'
import { NumberInput } from './NumberInput'
import { Select } from './Select'

export const DefaultComponents: FieldComponents = {
  text: TextInput,
  number: NumberInput,
  select: Select
}
