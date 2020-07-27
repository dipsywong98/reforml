import { validateFieldOneRule, validateField } from './validateField'
import { FieldValidators } from '../types/Validator'

describe('validateFieldOneRule', () => {
  it('can validate by validator name', () => {
    const fieldValidator = 'isFoo'
    const validatorDictionary = {
      isFoo: (value: string): boolean => value === 'foo'
    }

    expect(validateFieldOneRule('foo', fieldValidator, validatorDictionary)).toBeTruthy()
    expect(validateFieldOneRule('bar', fieldValidator, validatorDictionary)).toBeFalsy()
  })

  it('can validate by direct function', () => {
    const fieldValidator = { isFoo: (value: string): boolean => value === 'foo' }
    const validatorDictionary = {}

    expect(validateFieldOneRule('foo', fieldValidator, validatorDictionary)).toBeTruthy()
    expect(validateFieldOneRule('bar', fieldValidator, validatorDictionary)).toBeFalsy()
  })

  it('can validate by field settings', () => {
    const fieldValidator = {
      isEqual: ['foo']
    }
    const validatorDictionary = {
      isEqual: (value: string, compare: string): boolean => value === compare
    }

    expect(validateFieldOneRule('foo', fieldValidator, validatorDictionary)).toBeTruthy()
    expect(validateFieldOneRule('bar', fieldValidator, validatorDictionary)).toBeFalsy()
  })
})

describe('validateField', () => {
  it('can validate a field with multiple validators', () => {
    const fieldValidators: FieldValidators<string> = [
      'isFoo',
      {
        firstLetterIsF: (value: string): boolean => value[0] === 'F'
      },
      {
        isLength: [3]
      }
    ]
    const validatorDictionary = {
      isFoo (value: string): boolean {
        return value === 'Foo'
      },
      isLength (value: string, length: number): boolean {
        return value.length === length
      }
    }
    expect(validateField('Foo', fieldValidators, validatorDictionary)).toEqual(undefined)
    expect(validateField('12345', fieldValidators, validatorDictionary)).toEqual(['isFoo', 'firstLetterIsF', 'isLength'])
  })
})
