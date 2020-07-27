import { useState } from 'react'
import { ValidateErrorsGetter, SetValidateErrorsGetter, ValidateErrors } from '../types'

export const useValidate = (): ValidateErrorsGetter | SetValidateErrorsGetter => {
  const [validate, setValidate_] = useState<ValidateErrorsGetter>(() => () => {
    throw new Error('validation before form initialization')
  })
  return (realValidate?: ValidateErrorsGetter): ValidateErrors => {
    if (realValidate !== undefined) {
      setValidate_(() => realValidate)
      return realValidate()
    } else {
      return validate()
    }
  }
}
