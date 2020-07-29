import { fieldValidatorToNameFunctionAndParams, validateField } from './validateField'
import { FieldValidator, FieldValidators } from '../types/Validator'
import { defaultValidateErrorFormatter } from './defaultValidateErrorFormatter'
import { WrongValidatorSettingError } from '../errors/WrongValidatorSettingError'

describe('fieldValidatorToNameFunctionAndParams', () => {
  it('can extract by validator name', () => {
    const fieldValidator = 'isFoo'
    const foo = (value: string): boolean => value === 'foo'
    const validatorDictionary = {
      isFoo: foo
    }
    expect(fieldValidatorToNameFunctionAndParams(fieldValidator, validatorDictionary)).toEqual(['isFoo', foo, []])
  })

  it('can extract by direct function', () => {
    const foo1 = (value: string): boolean => value === 'foo'
    const fieldValidator = { isFoo: foo1 }
    const validatorDictionary = {}

    expect(fieldValidatorToNameFunctionAndParams(fieldValidator, validatorDictionary)).toEqual(['isFoo', foo1, []])
  })

  it('can extract by field settings in array', () => {
    const fieldValidator = {
      isEqual: ['foo']
    }
    const equal = (value: string, compare: string): boolean => value === compare
    const validatorDictionary = {
      isEqual: equal
    }

    expect(fieldValidatorToNameFunctionAndParams(fieldValidator, validatorDictionary)).toEqual(['isEqual', equal, ['foo']])
  })

  it('can extract by field settings in single value', () => {
    const fieldValidator = {
      isEqual: 'foo'
    }
    const equal1 = (value: string, compare: string): boolean => value === compare
    const validatorDictionary = {
      isEqual: equal1
    }

    expect(fieldValidatorToNameFunctionAndParams(fieldValidator, validatorDictionary)).toEqual(['isEqual', equal1, ['foo']])
  })

  it('should throw if the field validation setting is wrong', () => {
    const fieldValidator: FieldValidator<unknown> = [] as unknown as FieldValidator<unknown>
    const equal1 = (value: string, compare: string): boolean => value === compare
    const validatorDictionary = {
      isEqual: equal1
    }
    const t = (): void => {
      fieldValidatorToNameFunctionAndParams(fieldValidator, validatorDictionary)
    }
    expect(t).toThrow(WrongValidatorSettingError)
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
        isLength: 3
      },
      {
        isLengthBetween: [3, 5]
      }
    ]
    const validatorDictionary = {
      isFoo (value: string): boolean {
        return value === 'Foo'
      },
      isLength (value: string, length: number): boolean {
        return value.length === length
      },
      isLengthBetween (value: string, low: number, high: number): boolean {
        return value.length >= low && value.length <= high
      }
    }
    expect(validateField('Foo', fieldValidators, validatorDictionary, defaultValidateErrorFormatter)).toEqual(undefined)
    expect(validateField('12345', fieldValidators, validatorDictionary, defaultValidateErrorFormatter)).toEqual(['isFoo', 'firstLetterIsF', 'isLength:3'])
    expect(validateField('1234567890', fieldValidators, validatorDictionary, defaultValidateErrorFormatter)).toEqual(['isFoo', 'firstLetterIsF', 'isLength:3', 'isLengthBetween:3,5'])
  })
})
