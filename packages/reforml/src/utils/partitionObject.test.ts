import { partitionObject } from './partitionObject'

describe('partitionObject', () => {
  it('can partition object by keys', () => {
    const object = {
      a: 1,
      b: 2,
      c: {
        d: 3
      },
      e: {
        f: 4
      }
    }
    const [a, b] = partitionObject(object, ['a', 'c'])
    expect(a).toEqual({
      a: 1,
      c: {
        d: 3
      }
    })
    expect(b).toEqual({
      b: 2,
      e: {
        f: 4
      }
    })
  })
})
