import { validateForm } from './validateForm'
import { FormValue } from '../types'

const validatorDictionary = {
  isFoo (value: string): boolean {
    return value === 'Foo'
  },
  isEqual (value: string, compare: string): boolean {
    return value === compare
  },
  isLength (value: unknown[], compare: number): boolean {
    return value.length === compare
  }
}

describe('validateForm', () => {
  it('can validate simple field', () => {
    const fields = {
      f1: {
        type: 'text',
        validate: [
          'isFoo', {
            isEqual: ['Foo']
          }]
      },
      f2: {
        type: 'text',
        validate: [{
          isEqual: ['bar']
        }],
        required: true
      }
    }

    expect(validateForm({
      f1: 'Foo',
      f2: 'bar'
    }, fields, validatorDictionary)).toEqual(undefined)

    expect(validateForm({
      f1: 'random'
    }, fields, validatorDictionary)).toEqual({
      f1: ['isFoo', 'isEqual'],
      f2: ['required']
    })
  })

  it('can validate list field', () => {
    const fields = {
      f1: {
        of: {
          type: 'text',
          validate: [
            'isFoo',
            { isEqual: ['Foo'] }
          ]
        },
        validate: [
          { isLength: [3] }
        ],
        required: true
      }
    }

    expect(validateForm({
      f1: ['Foo', 'Foo', 'Foo']
    }, fields, validatorDictionary)).toEqual(undefined)

    expect(validateForm({}, fields, validatorDictionary)).toEqual({ f1: ['required'] })
    expect(validateForm({ f1: ['Foo', 'bar'] }, fields, validatorDictionary)).toEqual({
      f1: [[undefined, ['isFoo', 'isEqual']], 'isLength']
    })
  })

  it('can validate object field', () => {
    const fields = {
      f1: {
        type: 'object',
        fields: {
          a: {
            type: 'text',
            validate: ['isFoo'],
            required: true
          },
          b: {
            type: 'text'
          }
        },
        validate: [{
          noB: (value: unknown): boolean => (value as FormValue).b === undefined
        }],
        required: true
      }
    }

    expect(validateForm({
      f1: {
        a: 'Foo'
      }
    }, fields, validatorDictionary)).toEqual(undefined)
    expect(validateForm({
      f1: {
        b: 'bar'
      }
    }, fields, validatorDictionary)).toEqual({ f1: [{ a: ['required'] }, 'noB'] })
    expect(validateForm({}, fields, validatorDictionary)).toEqual({ f1: ['required'] })
  })
})
