import { fieldsConstraintsToValidate } from './fieldsConstraintsToValidate'
import { MissingAttributeError } from '../errors'

describe('fieldsConstraintsToValidate', () => {
  it('can convert constrains to validate', () => {
    expect(fieldsConstraintsToValidate({
      f1: {
        type: 'number',
        max: 10,
        min: 1,
        step: 1
      },
      f2: {
        type: 'text',
        pattern: '123',
        minLength: 1,
        maxLength: 10
      }
    })).toEqual({
      f1: {
        type: 'number',
        max: 10,
        min: 1,
        step: 1,
        validate: [
          {
            max: [10]
          }, {
            min: [1]
          }, {
            step: [1, 1]
          }
        ]
      },
      f2: {
        type: 'text',
        pattern: '123',
        minLength: 1,
        maxLength: 10,
        validate: [
          {
            pattern: ['123']
          },
          {
            minLength: [1]
          },
          {
            maxLength: [10]
          }
        ]
      }
    })
  })

  it('can convert constrains of list field to validate', () => {
    expect(fieldsConstraintsToValidate({
      f1: {
        type: 'list',
        of: {
          type: 'number',
          max: 10
        }
      }
    })).toEqual({
      f1: {
        type: 'list',
        of: {
          type: 'number',
          max: 10,
          validate: [
            {
              max: [10]
            }
          ]
        }
      }
    })
  })

  it('can convert constrains of object field to validate', () => {
    expect(fieldsConstraintsToValidate({
      f1: {
        type: 'object',
        fields: {
          f2: {
            type: 'number',
            max: 10
          }
        }
      }
    })).toEqual({
      f1: {
        type: 'object',
        fields: {
          f2: {
            type: 'number',
            max: 10,
            validate: [
              {
                max: [10]
              }
            ]
          }
        }
      }
    })
  })

  it('should throw error when step constraint is used without min constraint', () => {
    const t = (): void => {
      fieldsConstraintsToValidate({
        f1: {
          type: 'number',
          step: 3
        }
      })
    }
    expect(t).toThrow(MissingAttributeError)
  })
})
