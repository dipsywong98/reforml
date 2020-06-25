/**
 * Definition of field dictionary
 */
export interface Fields {
  [fieldName: string]: Field<unknown>
}

/**
 * Definition of a Field in yaml
 */
export interface Field<T> {
  type: string
  label?: string
  disabled?: boolean
  default?: T
  helperText?: string
  options?: T[]
}
