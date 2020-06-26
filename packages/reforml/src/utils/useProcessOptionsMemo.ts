import { DigKey, Options } from '../types'
import { digKey } from './digKey'
import { useMemo } from 'react'

interface ValueLabel<T> {
  value: T
  label: string
  [otherProps: string]: unknown
}

interface ProcessSettings {
  valueKey?: DigKey
  labelKey?: DigKey
}

export const processOptions = <T> (options: Options<T>, { valueKey, labelKey }: ProcessSettings = {}): Array<ValueLabel<T>> => {
  if (Array.isArray(options)) {
    return options.map((option) => {
      let value: T
      let label: string = typeof option === 'string' ? option : JSON.stringify(option)
      if (typeof option === 'object') {
        if (valueKey !== undefined) {
          value = digKey(option, valueKey)
        } else if ('value' in option) {
          value = option.value as T
        } else {
          value = option as T
        }
        if (labelKey !== undefined) {
          const digged = digKey(option, labelKey)
          label = typeof digged === 'string' ? digged : JSON.stringify(digged)
        } else if ('label' in option) {
          const digged = option.label
          label = typeof digged === 'string' ? digged : JSON.stringify(digged)
        } else if (typeof value === 'string' || typeof value === 'number') {
          label = value.toString()
        }
        return { ...option, value, label }
      } else {
        value = option
        return { value, label }
      }
    })
  } else {
    return Object.entries(options).map(([label, value]) => ({ value, label }))
  }
}

export const useProcessOptionsMemo = <T>(options?: Options<T>, settings?: ProcessSettings): Array<ValueLabel<T>> => useMemo(
  () => (
    options !== undefined
      ? processOptions<T>(options, settings)
      : []
  ),
  [options]
)
