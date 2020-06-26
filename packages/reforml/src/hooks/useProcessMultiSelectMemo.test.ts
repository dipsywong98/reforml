import { generateMultiSelectValue, processMultiSelectValue } from './useProcessMultiSelectMemo'

describe('processMultiSelect', () => {
  it('should return empty set if undefined is given', () => {
    const result = processMultiSelectValue()
    expect(result).toEqual(new Set([]))
  })

  it('should return same set if set is given', () => {
    const set = new Set([1, 2, 3, 4])
    const result = processMultiSelectValue(set)
    expect(result).toEqual(set)
  })

  it('should return set if array is given', () => {
    const array = [1, 2, 3, 4]
    const result = processMultiSelectValue(array)
    expect(result).toEqual(new Set([1, 2, 3, 4]))
  })

  it('should return set if object is give', () => {
    const object = {
      a: true,
      b: false
    }
    const result = processMultiSelectValue(object)
    expect(result).toEqual(new Set(['a']))
  })
})

describe('generateMultiSelectValue', () => {
  it('should return set if output is \'set\'', () => {
    const set = new Set([1, 2, 3])
    const result = generateMultiSelectValue(set, 'set')
    expect(result).toEqual(set)
  })

  it('should return array if output is \'array\'', () => {
    const set = new Set([1, 2, 3])
    const result = generateMultiSelectValue(set, 'array')
    expect(result).toEqual([1, 2, 3])
  })

  it('should result object if output is \'object\'', () => {
    const set = new Set(['a', 'b', 'c'])
    const result = generateMultiSelectValue(set, 'object')
    expect(result).toEqual({
      a: true,
      b: true,
      c: true
    })
  })

  it('should throw error if output is \'object\' but set is not string', () => {
    const set = new Set([{ a: 1 }])
    expect(() => {
      generateMultiSelectValue(set, 'object')
    }).toThrow()
  })
})
