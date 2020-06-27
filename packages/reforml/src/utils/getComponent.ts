import { Field, FieldComponent } from '../types/fields'
import { FieldComponents } from '../types'

export const getComponent = (Components: FieldComponents, field: string | Field<unknown>, fieldName: string): FieldComponent<unknown> => {
  if (typeof field === 'string') {
    const Component: FieldComponent<unknown> | undefined = Components[field]
    if (Component === undefined) {
      throw Error(`field of type '${field}' is not defined in field ${fieldName}`)
    }
    return Component
  } else {
    if (field.type === undefined) {
      throw Error(`'type' attribute is missing in field ${fieldName}`)
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const Component: FieldComponent<unknown> | undefined = Components[field.type]
    if (Component === undefined) {
      throw Error(`field of type '${field.type}' is not defined in field ${fieldName}`)
    }
    return Component
  }
}
