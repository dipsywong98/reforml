export type ValidateErrors = {
  [fieldName: string]: string[] | ValidateErrors | Array<string| Array<string[] | undefined> | ValidateErrors>
} | undefined

export type ValidateErrorsGetter = () => ValidateErrors
export type SetValidateErrorsGetter = (fn?: ValidateErrorsGetter) => void
