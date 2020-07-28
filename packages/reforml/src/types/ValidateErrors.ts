export type FieldValidateError = undefined | Array<string | Array<string[] | undefined> | ValidateErrors>

export type ValidateErrors = {
  [fieldName: string]: FieldValidateError
} | undefined
