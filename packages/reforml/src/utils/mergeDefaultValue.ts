import { Fields, FormValue } from '../types'

export function mergeDefaultValue (fields: Fields, initialValue: FormValue): boolean {
  let flag = false
  Object.entries({ ...fields }).forEach(([fieldName, field]) => {
    if (initialValue[fieldName] === undefined) {
      if (field.default !== undefined) {
        flag = true
        if (Array.isArray(field.default)) {
          initialValue[fieldName] = Object.assign([], field.default)
        } else if (typeof field.default === 'object') {
          initialValue[fieldName] = Object.assign({}, field.default)
        } else {
          initialValue[fieldName] = field.default
        }
      }
    }
  })
  return flag
}
