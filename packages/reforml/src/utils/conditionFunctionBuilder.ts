import { Comparison, Condition } from '../types/Condition'
import { FormValue } from '../types'
import get from 'get-value'

export const conditionFunctionBuilder = (condition: Condition) => (formValue: FormValue): boolean => {
  return Object.entries(condition).map(([fieldName, compare]): boolean => {
    const lhs = get(formValue, fieldName)
    return Object.keys(compare).map((operator): boolean => {
      switch (operator) {
        case Comparison.EQ:
          return lhs === compare[operator]
        case Comparison.NEQ:
          return lhs !== compare[operator]
        case Comparison.GT: {
          const rhs = compare[operator]
          if (typeof lhs === 'number' && rhs !== undefined) {
            return lhs > rhs
          } else {
            return false
          }
        }
        case Comparison.GTE: {
          const rhs = compare[operator]
          if (typeof lhs === 'number' && rhs !== undefined) {
            return lhs >= rhs
          } else {
            return false
          }
        }
        case Comparison.LTE: {
          const rhs = compare[operator]
          if (typeof lhs === 'number' && rhs !== undefined) {
            return lhs <= rhs
          } else {
            return false
          }
        }
        case Comparison.LT: {
          const rhs = compare[operator]
          if (typeof lhs === 'number' && rhs !== undefined) {
            return lhs < rhs
          } else {
            return false
          }
        }
        case Comparison.IN: {
          const rhs = compare[operator]
          if (Array.isArray(rhs)) {
            return rhs.includes(lhs as string | number | boolean | symbol)
          } else {
            return false
          }
        }
        default:
          return false
      }
    }).reduce((a, b) => a && b, true)
  }).reduce((a, b) => a && b, true)
}
