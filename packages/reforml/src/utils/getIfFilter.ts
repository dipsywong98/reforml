import { Field, FormValue } from '../types'
import { IfFieldKey } from '../types/IfFieldKey'
import { conditionFunctionBuilder } from './conditionFunctionBuilder'

export const getIfFilter = (formValue: FormValue, ifFieldKey: IfFieldKey) => ([, fieldDef]: [unknown, Field<unknown>]): boolean => {
  const conditionChecker = fieldDef[ifFieldKey]
  if (conditionChecker === undefined) {
    return true
  } else if (typeof conditionChecker === 'string') {
    return formValue[conditionChecker] === true
  } else if (typeof conditionChecker === 'function') {
    return conditionChecker(formValue)
  } else {
    return conditionFunctionBuilder(conditionChecker)(formValue)
  }
}
