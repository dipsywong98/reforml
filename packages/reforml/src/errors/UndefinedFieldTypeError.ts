export class UndefinedFieldTypeError extends Error {
  name = 'UndefinedFieldTypeError'
  constructor (fieldType: string, fieldName?: string) {
    super(UndefinedFieldTypeError.getMessage(fieldType, fieldName)
    )
  }

  private static getMessage (fieldType: string, fieldName?: string): string {
    return (
      fieldName === undefined
        ? 'Some field'
        : `Field '${fieldName}'`
    ) + ` uses an undefined field type '${fieldType}',
     please make sure you had register a FieldComponent for this type in ReformlProvider, 
     or specify another field type for this field`
  }
}
