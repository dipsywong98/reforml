import { getComponent } from './getComponent'
import { DefaultFieldComponents, TextInput } from '../components/fields'
import { MissingAttributeError, UndefinedFieldTypeError } from '../errors'

describe('getComponent', () => {
  describe('with type string', () => {
    it('should return the right component if it presents', () => {
      expect(getComponent(DefaultFieldComponents, 'text')).toEqual(TextInput)
    })

    it('should throw UndefinedFieldTypeError if component is not present', () => {
      const t = (): void => {
        getComponent(DefaultFieldComponents, 'something_random')
      }
      expect(t).toThrow(UndefinedFieldTypeError)
    })
  })

  describe('with field definition object', () => {
    it('should throw MissingAttributeError if type is not present in field', () => {
      const t = (): void => {
        getComponent(DefaultFieldComponents, {})
      }
      expect(t).toThrow(MissingAttributeError)
    })

    it('should throw UndefinedFieldTypeError if component is not present', () => {
      const t = (): void => {
        getComponent(DefaultFieldComponents, { type: 'something_random' })
      }
      expect(t).toThrow(UndefinedFieldTypeError)
    })
  })
})
