import {
  FieldValidator,
  Validator,
  ValidatorDictionary,
  isValidatorSettings,
  FieldValidators
} from '../types/Validator'
import { ValidateErrorFormatter } from '../types'

export const fieldValidatorToNameFunctionAndParams = <T> (fieldValidator: FieldValidator<T>, validatorDictionary: ValidatorDictionary): [string, Validator<T>, never[]] => {
  let ruleName = ''
  let validate: Validator<T>
  let params: never[] = []
  if (typeof fieldValidator === 'string') {
    validate = validatorDictionary[fieldValidator] as Validator<T>
    ruleName = fieldValidator
  } else if (isValidatorSettings(fieldValidator)) {
    const [validatorName, validatorParams] = Object.entries(fieldValidator)[0]
    ruleName = validatorName
    if (typeof validatorParams === 'function') {
      validate = validatorParams as Validator<T>
    } else if (Array.isArray(validatorParams)) {
      validate = validatorDictionary[validatorName] as Validator<T>
      params = validatorParams as never[]
    } else {
      validate = validatorDictionary[validatorName] as Validator<T>
      params.push(validatorParams as never)
    }
  } else {
    throw new Error('Wrong Validator Settings')
  }
  return [ruleName, validate, params]
}

export const validateField = <T> (value: T, fieldValidators: FieldValidators<T>, validatorDictionary: ValidatorDictionary, validateErrorFormatter?: ValidateErrorFormatter): string[] | undefined => {
  const result: string[] = fieldValidators
    .map((validator) => {
      const [ruleName, validate, params] = fieldValidatorToNameFunctionAndParams(validator, validatorDictionary)
      if (validate(value, ...params)) {
        return undefined
      } else {
        return validateErrorFormatter?.(value, ruleName, params) ?? ruleName
      }
    })
    .filter(v => typeof v === 'string') as string[]
  return result.length > 0 ? result : undefined
}
