import { processOptions } from './useProcessOptionsMemo'

describe('processOptions', () => {
  it('can process label to value map', () => {
    const optionsDef = {
      label1: 'value1',
      label2: 'value2'
    }
    const result = processOptions(optionsDef)
    expect(result).toEqual([{
      value: 'value1',
      label: 'label1'
    }, {
      value: 'value2',
      label: 'label2'
    }])
  })

  it('can precess array of values', () => {
    const optionsDef = ['value1', 'value2']
    const result = processOptions(optionsDef)
    expect(result).toEqual([{
      value: 'value1',
      label: 'value1'
    }, {
      value: 'value2',
      label: 'value2'
    }])
  })

  describe('processing array of object', () => {
    it('can process without any value and label', () => {
      const optionDef = [{
        a: 1,
        b: 2
      }, {
        a: 3,
        b: 4
      }]
      const result = processOptions(optionDef)
      expect(result).toEqual([{
        value: {
          a: 1,
          b: 2
        },
        label: JSON.stringify({
          a: 1,
          b: 2
        }),
        a: 1,
        b: 2
      }, {
        value: {
          a: 3,
          b: 4
        },
        label: JSON.stringify({
          a: 3,
          b: 4
        }),
        a: 3,
        b: 4
      }])
    })

    it('can process with value and without label will display value', () => {
      const optionDef = [{
        value: 1,
        b: 2
      }, {
        value: 4,
        a: 3
      }]
      const result = processOptions(optionDef)
      expect(result).toEqual([{
        value: 1,
        label: '1',
        b: 2
      }, {
        value: 4,
        label: '4',
        a: 3
      }])
    })

    it('can process if value and label keys are present', () => {
      const optionDef = [{
        value: 1,
        label: 2
      }, {
        value: '3',
        label: 4
      }]
      const result = processOptions(optionDef)
      expect(result).toEqual([{
        value: 1,
        label: '2'
      }, {
        value: '3',
        label: '4'
      }])
    })

    it('can process if valueKey and labelKey keys are present', () => {
      const optionDef = [{
        a: 1,
        b: {
          c: 2
        },
        value: '123',
        label: '456'
      }, {
        a: '3',
        b: {
          c: 4
        }
      }]
      const result = processOptions(optionDef, { valueKey: 'a', labelKey: ['b', 'c'] })
      expect(result).toEqual([{
        value: 1,
        label: '2',
        a: 1,
        b: {
          c: 2
        }
      }, {
        value: '3',
        label: '4',
        a: '3',
        b: {
          c: 4
        }
      }])
    })
  })
})
