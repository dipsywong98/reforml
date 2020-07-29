import { Fields, FormValue, ValidateErrors, isFormValue, isListField, Field, ValidateErrorFormatter } from '../types'
import { FieldValidators, ValidatorDictionary } from '../types/Validator'
import { validateField } from './validateField'
import { isDefined } from './isDefined'

export const validateForm = (formValue: FormValue, fields: Fields, validatorDictionary: ValidatorDictionary, validateErrorFormatter?: ValidateErrorFormatter): ValidateErrors => {
  const errors: ValidateErrors = {}
  Object.entries(fields).forEach((
    [
      fieldName,
      field
    ]: [
      string,
      Field<unknown>
    ]) => {
    if (fieldName in formValue && isDefined(formValue[fieldName])) {
      const value: unknown = formValue[fieldName]
      const fieldErr = []
      if ('fields' in field) {
        if (isFormValue(value)) {
          const subErr = validateForm(value, field.fields as Fields, validatorDictionary, validateErrorFormatter)
          if (subErr !== undefined) {
            fieldErr.push(subErr)
          }
        }
      }
      if (Array.isArray(value) && isListField(field)) {
        if (field.of !== undefined && typeof field.of !== 'string' && field.of.validate !== undefined) {
          const y: FieldValidators<unknown> = field.of.validate
          const subErr = value.map(subValue => validateField(subValue, y, validatorDictionary, validateErrorFormatter))
          if (subErr.filter(v => v !== undefined).length > 0) {
            fieldErr.push(subErr)
          }
        }
      }
      if (field.validate !== undefined) {
        const generalErr = validateField(value, field.validate, validatorDictionary, validateErrorFormatter)
        if (generalErr !== undefined) {
          fieldErr.push(...generalErr)
        }
      }
      if (fieldErr.length > 0) {
        errors[fieldName] = fieldErr
      }
    } else {
      if (field.required ?? false) {
        errors[fieldName] = ['required']
      }
    }
  })
  return Object.keys(errors).length === 0 ? undefined : errors
}
