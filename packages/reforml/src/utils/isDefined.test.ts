import { isDefined } from './isDefined'

describe('isDefined', () => {
  it('should return false for empty string', () => {
    expect(isDefined('')).toEqual(false)
  })
  it('should return true for non-empty string', () => {
    expect(isDefined('something')).toEqual(true)
  })
  it('should return false for empty array', () => {
    expect(isDefined([])).toEqual(false)
  })
  it('should return true for non empty array', () => {
    expect(isDefined([''])).toEqual(true)
  })
  it('should return false for empty object', () => {
    expect(isDefined({})).toEqual(false)
  })
  it('should return false for object contains no defined value', () => {
    expect(isDefined({ value: '' })).toEqual(false)
  })
  it('should return true for object contains a defined value', () => {
    expect(isDefined({ value: '123' })).toEqual(true)
  })
  it('should return false for undefined', () => {
    expect(isDefined(undefined)).toEqual(false)
  })
  it('should return false for null', () => {
    expect(isDefined(null)).toEqual(false)
  })
})
