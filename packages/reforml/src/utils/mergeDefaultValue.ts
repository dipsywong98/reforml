import { Fields, FormValue } from '../types'

/**
 * Apply the default value of fields to formValue if not present
 * @param fields
 * @param formValue
 */
export function mergeDefaultValue (fields: Fields, formValue: FormValue): boolean {
  let flag = false
  Object.entries({ ...fields }).forEach(([fieldName, field]) => {
    if (formValue[fieldName] === undefined) {
      if (field.defaultVal !== undefined) {
        flag = true
        if (Array.isArray(field.defaultVal)) {
          formValue[fieldName] = Object.assign([], field.defaultVal)
        } else if (typeof field.defaultVal === 'object') {
          formValue[fieldName] = Object.assign({}, field.defaultVal)
        } else {
          formValue[fieldName] = field.defaultVal
        }
      }
    }
  })
  return flag
}
