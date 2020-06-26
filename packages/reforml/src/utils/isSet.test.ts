import { isSet } from './isSet'

describe('isSet', () => {
  it('should return true if it is a set', () => {
    expect(isSet(new Set())).toBeTruthy()
  })
})
