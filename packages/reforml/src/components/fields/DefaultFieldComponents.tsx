import { TextInput } from './TextInput'
import { FieldComponent, FieldComponents } from '../../types'
import { NumberInput } from './NumberInput'
import { Select } from './Select'
import { Checkbox } from './Checkbox'
import { CheckboxGroup } from './CheckboxGroup'
import { ListInput } from './ListInput'
import { ObjectInput } from './ObjectInput'

export const DefaultFieldComponents: FieldComponents = {
  text: TextInput as FieldComponent<string>,
  number: NumberInput as FieldComponent<number>,
  select: Select,
  checkbox: Checkbox,
  checkbox_group: CheckboxGroup,
  list: ListInput,
  object: ObjectInput
}
