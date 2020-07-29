import { MissingAttributeError } from './MissingAttributeError'

describe('MissingAttributeError', () => {
  it('can construct using one attribute only', () => {
    const err = new MissingAttributeError('foo')
    expect(err.message).toEqual('A field is missing the required attribute \'foo\'.')
  })

  it('can construct using 2 attribute only', () => {
    const err = new MissingAttributeError(['foo', 'bar'])
    expect(err.message).toEqual('A field is missing the required attributes \'foo\', \'bar\'.')
  })

  it('can construct using 1 attribute with field name and field type', () => {
    const err = new MissingAttributeError('foo', 'myField', 'text')
    expect(err.message).toEqual('Field \'myField\' is missing the required attribute \'foo\' as a \'text\' field.')
  })

  it('can construct using 2 attribute with field name and field type', () => {
    const err = new MissingAttributeError(['foo', 'bar'], 'myField', 'text')
    expect(err.message).toEqual('Field \'myField\' is missing the required attributes \'foo\', \'bar\' as a \'text\' field.')
  })
})
