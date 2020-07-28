import { ValueEventCallback } from '../types'

export const generalizeValueCallback = <T> (valueCallback: (value: T) => unknown): ValueEventCallback<T> => (param: T | ({
  target: { value: T }
})): void => {
  if (typeof param === 'object') {
    if (param !== null && 'target' in param) {
      valueCallback(param.target.value)
    } else {
      valueCallback(param)
    }
  } else {
    valueCallback(param)
  }
}

export const generalizeOptionalValueCallback = <T> (valueCallback?: (value: T) => unknown): ValueEventCallback<T> | undefined => {
  if (valueCallback === undefined) return undefined
  return generalizeValueCallback(valueCallback)
}
