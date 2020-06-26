import { useProcessBool } from './useProcessBool'

describe('useProcessBool', () => {
  it('can manage simple boolean', () => {
    let value = false
    const [flag, handleChange] = useProcessBool<boolean>(value, (param) => {
      if (typeof param === 'boolean') {
        value = param
      } else {
        throw new Error('it should return boolean')
      }
    })
    expect(flag).toEqual(false)
    handleChange()
    expect(value).toEqual(true)
  })

  it('can manage custom true false value', () => {
    let value = 'true text'
    const [flag, handleChange] = useProcessBool<string>(value, (param) => {
      if (typeof param !== 'object') {
        value = param
      } else {
        throw new Error('it should return boolean')
      }
    }, {
      trueValue: 'true text',
      falseValue: 'false text'
    })
    expect(flag).toEqual(true)
    handleChange()
    expect(value).toEqual('false text')
  })
})
