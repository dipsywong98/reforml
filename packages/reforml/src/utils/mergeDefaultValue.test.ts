import { mergeDefaultValue } from './mergeDefaultValue'

describe('mergeDefaultValue', () => {
  it('should return false if every field in default value are present in formValue', () => {
    const fields = {
      f1: {
        type: 'text',
        defaultValue: 'default text'
      },
      f2: {
        type: 'number',
        defaultValue: 1234
      }
    }
    const formValue = {
      f1: 'my text',
      f2: 1111
    }
    const result = mergeDefaultValue(fields, formValue)
    expect(result).toBe(false)
    expect(formValue).toEqual({
      f1: 'my text',
      f2: 1111
    })
  })
  it('should return true if some field in default value are not present in formValue and should assign to formValue', () => {
    const fields = {
      f1: {
        type: 'text',
        defaultValue: 'default text'
      },
      f2: {
        type: 'number',
        defaultValue: 1234
      }
    }
    const formValue = {
      f1: 'my text'
    }
    const result = mergeDefaultValue(fields, formValue)
    expect(result).toBe(true)
    expect(formValue).toEqual({
      f1: 'my text',
      f2: 1234
    })
  })
})
