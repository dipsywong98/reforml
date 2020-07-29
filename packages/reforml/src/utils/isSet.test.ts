import { isSet } from './isSet'

describe('isSet', () => {
  it('should return true if it is a set', () => {
    expect(isSet(new Set())).toBeTruthy()
  })
  it('should return false if it is not a set', () => {
    expect(isSet(123)).toBeFalsy()
    expect(isSet([])).toBeFalsy()
  })
})
