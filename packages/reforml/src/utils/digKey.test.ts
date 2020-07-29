import { digKey } from './digKey'

const object = Object.freeze({ a: 1, b: { c: 2 } })

describe('digKey from {a: 1, b: {c: 2}}', () => {
  it('should return 1 if digKey is \'a\'', () => {
    expect(digKey(object, 'a')).toBe(1)
  })
  it('should return 2 if digKey is [\'b\',\'c\']', () => {
    expect(digKey(object, ['b', 'c'])).toBe(2)
  })
  it('should return itself if digKey is empty list', () => {
    expect(digKey(object, [])).toEqual(object)
  })
})
