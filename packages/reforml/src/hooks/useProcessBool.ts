import { ValueEventCallback } from '../types'

interface ProcessSettings<T> {
  trueValue?: T
  falseValue?: T
}

type ProcessBoolReturnType = [boolean, () => void]

export const useProcessBool = <T> (value?: T, onChange?: ValueEventCallback<T>, { trueValue, falseValue }: ProcessSettings<T> = {}): ProcessBoolReturnType => {
  const flag: boolean = (typeof value === 'boolean' ? value : trueValue !== undefined && value === trueValue)
  const handleChange = (): void => {
    const newValue = !flag
    if (newValue) {
      if (trueValue !== undefined) {
        onChange?.(trueValue)
      } else {
        onChange?.(true as unknown as T)
      }
    } else {
      onChange?.(falseValue as unknown as T)
    }
  }
  return [flag, handleChange]
}
