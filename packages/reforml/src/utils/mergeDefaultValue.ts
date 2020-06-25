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
      if (field.default !== undefined) {
        flag = true
        if (Array.isArray(field.default)) {
          formValue[fieldName] = Object.assign([], field.default)
        } else if (typeof field.default === 'object') {
          formValue[fieldName] = Object.assign({}, field.default)
        } else {
          formValue[fieldName] = field.default
        }
      }
    }
  })
  return flag
}
