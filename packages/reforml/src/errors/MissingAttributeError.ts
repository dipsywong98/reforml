export class MissingAttributeError extends Error {
  name = 'MissingAttributeError'

  constructor (attributes: string | string[], fieldName?: string, fieldType?: string) {
    super(MissingAttributeError.getMessage(attributes, fieldName, fieldType))
  }

  private static getMessage (attributes: string | string[], fieldName?: string, fieldType?: string): string {
    let message = ''
    if (fieldName !== undefined) {
      message += `Field '${fieldName}'`
    } else {
      message += 'A field'
    }
    message += ' is missing the required attribute'
    if (typeof attributes === 'string') {
      message += ` '${attributes}'`
    } else {
      message += `s '${attributes.join('\', \'')}'`
    }
    if (fieldType !== undefined) {
      message += ` as a '${fieldType}' field`
    }
    message += '.'
    return message
  }
}
