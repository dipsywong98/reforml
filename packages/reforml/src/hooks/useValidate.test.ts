import { renderHook, act } from '@testing-library/react-hooks'
import { useValidate } from './useValidate'

describe('useValidate', () => {
  it('can set validator', () => {
    const { result, rerender } = renderHook(() => useValidate())
    act(() => {
      result.current(() => ({ test: ['1234'] }))
      rerender()
    })
    expect(result.current()).toEqual({ test: ['1234'] })
  })
})
