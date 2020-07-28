import { fieldsConstraintsToValidate } from './fieldsConstraintsToValidate'

describe('fieldsConstraintsToValidate', () => {
  it('can convert constrains to validate', () => {
    expect(fieldsConstraintsToValidate({
      f1: {
        type: 'number',
        max: 10
      }
    })).toEqual({
      f1: {
        type: 'number',
        max: 10,
        validate: [
          {
            max: [10]
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
})
