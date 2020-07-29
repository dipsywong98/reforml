import { generalizeOptionalValueCallback } from './generalizeValueCallback'

describe('generalizeOptionalValueCallback', () => {
  it('can convert undefined to undefined', () => {
    expect(generalizeOptionalValueCallback(undefined)).toEqual(undefined)
  })

  it('its result can handle event object', (done) => {
    const originalCallback = (value: string): void => {
      expect(value).toEqual('hello world')
      done()
    }
    const result = generalizeOptionalValueCallback(originalCallback)
    expect(result).not.toEqual(undefined)
    result?.({
      target: {
        value: 'hello world'
      }
    })
  })

  it('its result can handle ordinary value', (done) => {
    const originalCallback = (value: string): void => {
      expect(value).toEqual('hello world')
      done()
    }
    const result = generalizeOptionalValueCallback(originalCallback)
    expect(result).not.toEqual(undefined)
    result?.('hello world')
  })
})
