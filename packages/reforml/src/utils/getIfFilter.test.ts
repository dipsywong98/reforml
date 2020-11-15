import { getIfFilter } from './getIfFilter'
import { FormValue } from '../types'

describe('getIfFilter', () => {
  it('return true of the if field does not exist', () => {
    const value = {
      bool: true
    }
    const result = getIfFilter(value, 'showIf')(['foo', {
      type: 'text'
    }])
    expect(result).toBeTruthy()
  })
  describe('provide string denoting a boolean field', () => {
    it('example: the field is true', () => {
      const value = {
        bool: true
      }
      const result = getIfFilter(value, 'showIf')(['foo', {
        type: 'text',
        showIf: 'bool'
      }])
      expect(result).toBeTruthy()
    })
    it('example: the field is true', () => {
      const value = {
        bool: false
      }
      const result = getIfFilter(value, 'showIf')(['foo', {
        type: 'text',
        showIf: 'bool'
      }])
      expect(result).toBeFalsy()
    })
  })
  describe('provide function of value return should it show', () => {
    it('example: the field is true', () => {
      const value = {
        bool: true
      }
      const result = getIfFilter(value, 'showIf')(['foo', {
        type: 'text',
        showIf: ({ bool }: FormValue) => bool === true
      }])
      expect(result).toBeTruthy()
    })
    it('example: the field is true', () => {
      const value = {
        bool: false
      }
      const result = getIfFilter(value, 'showIf')(['foo', {
        type: 'text',
        showIf: ({ bool }: FormValue) => bool === true
      }])
      expect(result).toBeFalsy()
    })
  })
  describe('provide condition', () => {
    it('example: the field is true', () => {
      const value = {
        bar: 'bar'
      }
      const result = getIfFilter(value, 'showIf')(['foo', {
        type: 'text',
        showIf: {
          bar: {
            $eq: 'bar'
          }
        }
      }])
      expect(result).toBeTruthy()
    })
    it('example: the field is false', () => {
      const value = {
        bar: 'barbar'
      }
      const result = getIfFilter(value, 'showIf')(['foo', {
        type: 'text',
        showIf: {
          bar: {
            $eq: 'bar'
          }
        }
      }])
      expect(result).toBeFalsy()
    })
  })
})
