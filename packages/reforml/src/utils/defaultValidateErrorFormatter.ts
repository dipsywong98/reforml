import { ValidateErrorFormatter } from '../types'

export const defaultValidateErrorFormatter: ValidateErrorFormatter = (_, ruleName, params) => {
  return ruleName + (params.length === 0 ? '' : ':' + params.join(','))
}
