/**
 * Definition of field dictionary
 */
export interface Fields {
  [fieldName: string]: Field<unknown>
}

/**
 * Definition of any Field in yaml
 */
export interface Field<T> {
  type: string
  label?: string
  disabled?: boolean
  default?: T
  helperText?: string
  options?: Options<T>
  valueKey?: DigKey
  labelKey?: DigKey
}

/**
 * DigKey type
 * Dig value from array of object
 * string is to direct access
 * string array is to dig through the nested structure
 */
export type DigKey = string | string[]

export type Option<T> = {
  [key: string]: unknown | T
} | T

export type Options<T> = {[label: string]: T} | Array<Option<T>>
