import { TextInput } from './TextInput'
import { FieldComponents } from '../../types'
import { NumberInput } from './NumberInput'
import { Select } from './Select'
import { Checkbox } from './Checkbox'
import { CheckboxGroup } from './CheckboxGroup'
import { ListInput } from './ListInput'
import { ListOfTextField } from './ListOfTextField'
import { ObjectInput } from './ObjectInput'

export const DefaultFieldComponents: FieldComponents = {
  text: TextInput,
  number: NumberInput,
  select: Select,
  checkbox: Checkbox,
  checkbox_group: CheckboxGroup,
  list: ListInput,
  text_list: ListOfTextField,
  object: ObjectInput
}
