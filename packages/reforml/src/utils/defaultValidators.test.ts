import { defaultValidators } from './defaultValidators'

describe('defaultValidators', () => {
  describe('pattern', () => {
    it('should return true when pattern matched', () => {
      expect(defaultValidators?.pattern?.('abc123' as never, 'abc\\d{3}' as never)).toEqual(true)
    })
    it('should return false when pattern not matched', () => {
      expect(defaultValidators?.pattern?.('abc1234' as never, 'abc\\d{3}' as never)).toEqual(false)
    })
  })

  describe('min', () => {
    it('should return true when >= that', () => {
      expect(defaultValidators?.min?.(123 as never, 4 as never)).toEqual(true)
      expect(defaultValidators?.min?.(123 as never, 123 as never)).toEqual(true)
    })
    it('should return false when not >= that', () => {
      expect(defaultValidators?.min?.(123 as never, 444 as never)).toEqual(false)
    })
  })

  describe('max', () => {
    it('should return true when <= that', () => {
      expect(defaultValidators?.max?.(123 as never, 123 as never)).toEqual(true)
      expect(defaultValidators?.max?.(123 as never, 444 as never)).toEqual(true)
    })
    it('should return false when not <= that', () => {
      expect(defaultValidators?.max?.(123 as never, 4 as never)).toEqual(false)
    })
  })

  describe('step', () => {
    it('should return true when value - min is integer multiplication of step', () => {
      expect(defaultValidators?.step?.(123 as never, 20 as never, 3 as never)).toEqual(true)
      expect(defaultValidators?.step?.(1 as never, 0.2 as never, 0 as never)).toEqual(true)
    })
    it('should return false when value - min is not integer multiplication of step', () => {
      expect(defaultValidators?.step?.(1 as never, 0.3 as never, 0 as never)).toEqual(false)
    })
  })

  describe('minLength', () => {
    it('should return true when length >= that', () => {
      expect(defaultValidators?.minLength?.('hello' as never, 5 as never)).toEqual(true)
      expect(defaultValidators?.minLength?.('hello' as never, 4 as never)).toEqual(true)
    })
    it('should return false when length not >= that', () => {
      expect(defaultValidators?.minLength?.('hello' as never, 6 as never)).toEqual(false)
    })
  })

  describe('maxLength', () => {
    it('should return true when length <= that', () => {
      expect(defaultValidators?.maxLength?.('hello' as never, 5 as never)).toEqual(true)
      expect(defaultValidators?.maxLength?.('hello' as never, 6 as never)).toEqual(true)
    })
    it('should return false when length not >= that', () => {
      expect(defaultValidators?.maxLength?.('hello' as never, 4 as never)).toEqual(false)
    })
  })
})
