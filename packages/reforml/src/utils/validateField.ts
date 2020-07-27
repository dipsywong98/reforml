import {
  FieldValidator,
  Validator,
  ValidatorDictionary,
  isValidatorSettings,
  FieldValidators
} from '../types/Validator'

export const validateFieldOneRule = <T>(value: T, fieldValidator: FieldValidator<T>, validatorDictionary: ValidatorDictionary): boolean => {
  let validate: Validator<T> | undefined
  let params: unknown[] = []
  if (typeof fieldValidator === 'string') {
    validate = validatorDictionary[fieldValidator] as Validator<T>
  } else if (isValidatorSettings(fieldValidator)) {
    const [validatorName, validatorParams] = Object.entries(fieldValidator)[0]
    if (typeof validatorParams === 'function') {
      validate = validatorParams as Validator<T>
    } else {
      validate = validatorDictionary[validatorName] as Validator<T>
      params = validatorParams
    }
  }

  if (validate !== undefined) {
    return validate(value, ...params as never[])
  } else {
    throw new Error('Wrong validator')
  }
}

export const validateField = <T>(value: T, fieldValidators: FieldValidators<T>, validatorDictionary: ValidatorDictionary): string[] | undefined => {
  const ruleNames = fieldValidators.map(fieldValidator => {
    let ruleName = ''
    if (typeof fieldValidator === 'string') {
      ruleName = fieldValidator
    } else if (isValidatorSettings(fieldValidator)) {
      const [validatorName] = Object.entries(fieldValidator)[0]
      ruleName = validatorName
    } else {
      throw new Error('Wrong validator')
    }
    return ruleName
  })
  const result: string[] = fieldValidators.map((validator, k) => validateFieldOneRule(value, validator, validatorDictionary) ? undefined : ruleNames[k]).filter(v => typeof v === 'string') as string[]
  return result.length > 0 ? result : undefined
}
