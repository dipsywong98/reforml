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
      if (field.defaultValue !== undefined) {
        flag = true
        if (Array.isArray(field.defaultValue)) {
          formValue[fieldName] = Object.assign([], field.defaultValue)
        } else if (typeof field.defaultValue === 'object') {
          formValue[fieldName] = Object.assign({}, field.defaultValue)
        } else {
          formValue[fieldName] = field.defaultValue
        }
      }
    }
  })
  return flag
}
