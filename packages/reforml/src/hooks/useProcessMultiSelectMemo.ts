import { MultiSelectOutput, MultiSelectValue } from '../types/fields'
import { isSet } from '../utils/isSet'
import { ValueCallback } from '../types'
import { useMemo } from 'react'

export const processMultiSelectValue = <T> (value?: MultiSelectValue<T>): Set<T> => {
  if (value === undefined) {
    return new Set([])
  } else if (isSet(value)) {
    return value
  }
  if (Array.isArray(value)) {
    return new Set(value)
  } else {
    return new Set<string>(Object.entries(value).filter(([_, flag]) => flag).map(([value]) => value)) as unknown as Set<T>
  }
}

export const generateMultiSelectValue = <T> (set: Set<T>, output: MultiSelectOutput = 'array'): MultiSelectValue<T> => {
  if (output === 'set') {
    return set
  } else if (output === 'array') {
    return Array.from(set)
  } else {
    const ret = {}
    set.forEach((key) => {
      if (typeof key === 'string') {
        ret[key as string] = true
      } else {
        throw new Error('value of options of multiselect view must be of type string')
      }
    })
    return ret
  }
}

export type ProcessMultiSelectReturnType<T> = [
  Set<T>,
  (value: T) => () => unknown
]

export const useProcessMultiSelectMemo = <T> (onChange?: ValueCallback<MultiSelectValue<T>>, value?: MultiSelectValue<T>, output: MultiSelectOutput = 'array'): ProcessMultiSelectReturnType<T> => {
  return useMemo(() => {
    const flags = processMultiSelectValue(value)
    const setFlag = (value: T) => (): void => {
      if (flags.has(value)) {
        flags.delete(value)
      } else {
        flags.add(value)
      }
      onChange?.(generateMultiSelectValue(flags, output))
    }
    return [flags, setFlag]
  }, [onChange, value, output])
}
