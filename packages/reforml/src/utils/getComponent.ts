import { Field, FieldComponent } from '../types/fields'
import { FieldComponents } from '../types'
import { UndefinedFieldTypeError } from '../errors/UndefinedFieldTypeError'
import { MissingAttributeError } from '../errors/MissingAttributeError'

export const getComponent = (Components: FieldComponents, field: string | Field<unknown>, fieldName?: string): FieldComponent<unknown> => {
  if (typeof field === 'string') {
    const Component: FieldComponent<unknown> | undefined = Components[field]
    if (Component === undefined) {
      throw new UndefinedFieldTypeError(field, fieldName)
    }
    return Component
  } else {
    if (field.type === undefined) {
      throw new MissingAttributeError('type', fieldName)
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const Component: FieldComponent<unknown> | undefined = Components[field.type]
    if (Component === undefined) {
      throw new UndefinedFieldTypeError(field.type, fieldName)
    }
    return Component
  }
}
