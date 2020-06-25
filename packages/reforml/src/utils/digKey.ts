import { DigKey } from '../types'

export const digKey = <T>(object: Record<string, unknown> | T, key: DigKey): T => {
  if (typeof key === 'string') {
    return object[key] as T
  } else {
    if (key.length === 0) {
      return object as T
    } else {
      const [head, ...tail] = key
      return digKey(object[head] as Record<string, unknown>|T, tail)
    }
  }
}
