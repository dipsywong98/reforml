import { ValidatorDictionary } from '../types/Validator'

export const defaultValidators: ValidatorDictionary = {
  pattern: (value: unknown, property: string | RegExp) => {
    const regex: RegExp = typeof property === 'string' ? new RegExp(`^${property}$`) : property
    return typeof value === 'string' && regex.test(value)
  },
  min: (value: unknown, property: number) => (typeof value === 'number' || value instanceof Date) && value >= property,
  max: (value: unknown, property: number) => (typeof value === 'number' || value instanceof Date) && value <= property,
  step: (value: unknown, property: number, min: number) => {
    if (!(typeof value === 'number' || value instanceof Date)) {
      return false
    }
    const mod = (value as number - min) % property
    return mod === 0 || mod / property < 0.00001 || (property - mod) / property < 0.00001
  },
  minLength: (value: unknown, property: number) => (typeof value === 'string' || Array.isArray(value)) && value.length >= property,
  maxLength: (value: unknown, property: number) => (typeof value === 'string' || Array.isArray(value)) && value.length <= property
}
