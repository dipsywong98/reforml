/**
 * The shape that reforml value should look like
 */
export interface FormValue {
  [fieldName: string]: unknown
}

export const isFormValue = (value: FormValue | unknown): value is FormValue => {
  return !Array.isArray(value) && typeof value === 'object'
}
