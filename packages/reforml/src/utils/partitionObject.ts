import { FieldComponentProps } from '../types/fields'

export type PartitionableObject = {
  [key: string]: unknown
  [key: number]: unknown
} | FieldComponentProps<unknown>

export const partitionObject = (object: PartitionableObject, keys: string[]): [PartitionableObject, PartitionableObject] => {
  const set = new Set(keys)
  return Object.keys(object).reduce<[PartitionableObject, PartitionableObject]>((prev, key) => {
    if (set.has(key)) {
      prev[0][key] = object[key]
    } else {
      prev[1][key] = object[key]
    }
    return prev
  }, [{}, {}])
}
