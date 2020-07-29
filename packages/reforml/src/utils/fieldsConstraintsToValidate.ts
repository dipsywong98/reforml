import { Field, Fields, isListField, isObjectField } from '../types/fields'
import { MissingAttributeError } from '../errors'
import { FieldValidator, ValidatorSettings } from '../types/Validator'

const constraintToValidator: Record<string, (property: never, field: Field<unknown>) => ValidatorSettings<unknown>> = {
  pattern: (property: string | RegExp) => ({
    pattern: [property]
  }),
  min: (property: number) => ({
    min: [property]
  }),
  max: (property: number) => ({
    max: [property]
  }),
  step: (property: number, field: Field<unknown>) => {
    if (!('min' in field)) {
      throw new MissingAttributeError('min')
    }

    return {
      step: [property, field.min]
    }
  },
  minLength: (property: number) => ({
    minLength: [property]
  }),
  maxLength: (property: number) => ({
    maxLength: [property]
  })
}

const processFieldConstraints = <T> (field: Field<T>): Field<T> => {
  Object.keys(field).forEach(key => {
    if (key in constraintToValidator) {
      if (field.validate === undefined) {
        field.validate = []
      }
      const validator: FieldValidator<unknown> = constraintToValidator[key](field[key] as never, field as Field<unknown>)
      field.validate.push(validator)
    }
  })
  return field
}

export const fieldsConstraintsToValidate = (fields: Fields): Fields => {
  const ret: Fields = {}
  Object.entries(fields).forEach(([fieldName, field]) => {
    ret[fieldName] = processFieldConstraints(Object.assign({}, field))

    if (isObjectField(field)) {
      if (field.fields !== undefined) {
        ret[fieldName].fields = fieldsConstraintsToValidate(field.fields)
      }
    }
    if (isListField(field)) {
      if (field.of !== undefined && typeof field.of !== 'string') {
        ret[fieldName].of = processFieldConstraints(Object.assign({}, field.of))
      }
    }
  })
  return ret
}
