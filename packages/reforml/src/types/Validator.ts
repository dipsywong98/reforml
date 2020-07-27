export type Validator<T> = (value: T, ...params: never[]) => boolean

export interface ValidatorSettings<T> {
  [ruleName: string]: unknown[] | Validator<T>
}

export const isValidatorSettings = <T>(what: unknown | ValidatorSettings<T>): what is ValidatorSettings<T> => {
  return typeof what === 'object' &&
    what !== null &&
    Object.keys(what).length === 1 &&
    (
      Array.isArray(Object.values(what)[0]) ||
      typeof Object.values(what)[0] === 'function'
    )
}

export type FieldValidator<T> = ValidatorSettings<T> | string
export type FieldValidators<T> = Array<FieldValidator<T>>

export interface ValidatorDictionary {
  [validatorName: string]: Validator<never>
}
