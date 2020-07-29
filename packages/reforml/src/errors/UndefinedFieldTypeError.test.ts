import { UndefinedFieldTypeError } from './UndefinedFieldTypeError'

describe('UndefinedFieldTypeError', () => {
  it('can construct with fieldType only', () => {
    expect(new UndefinedFieldTypeError('new_field_type').message).toEqual(`Some field uses an undefined field type 'new_field_type',
     please make sure you had register a FieldComponent for this type in ReformlProvider, 
     or specify another field type for this field.`)
  })
  it('can construct with fieldType and fieldName', () => {
    expect(new UndefinedFieldTypeError('new_field_type', 'myField').message).toEqual(`Field 'myField' uses an undefined field type 'new_field_type',
     please make sure you had register a FieldComponent for this type in ReformlProvider, 
     or specify another field type for this field.`)
  })
})
