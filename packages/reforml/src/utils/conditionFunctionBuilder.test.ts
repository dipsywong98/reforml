import { conditionFunctionBuilder } from './conditionFunctionBuilder'
import { Condition } from '../types/Condition'

describe('conditionFunctionBuilder', () => {
  it('can build eq', () => {
    const condition: Condition = {
      foo: {
        $eq: 123
      }
    }
    const fn = conditionFunctionBuilder(condition)

    expect(fn({
      foo: 123
    })).toBeTruthy()
    expect(fn({
      foo: 456
    })).toBeFalsy()
  })
  it('can build neq', () => {
    const condition: Condition = {
      foo: {
        $neq: 123
      }
    }
    const fn = conditionFunctionBuilder(condition)

    expect(fn({
      foo: 456
    })).toBeTruthy()
    expect(fn({
      foo: 123
    })).toBeFalsy()
  })
  it('can build gt', () => {
    const condition: Condition = {
      foo: {
        $gt: 123
      }
    }
    const fn = conditionFunctionBuilder(condition)

    expect(fn({
      foo: 456
    })).toBeTruthy()
    expect(fn({
      foo: 123
    })).toBeFalsy()
  })
  it('can build gte', () => {
    const condition: Condition = {
      foo: {
        $gte: 123
      }
    }
    const fn = conditionFunctionBuilder(condition)

    expect(fn({
      foo: 456
    })).toBeTruthy()
    expect(fn({
      foo: 123
    })).toBeTruthy()
  })
  it('can build lte', () => {
    const condition: Condition = {
      foo: {
        $lte: 123
      }
    }
    const fn = conditionFunctionBuilder(condition)

    expect(fn({
      foo: 456
    })).toBeFalsy()
    expect(fn({
      foo: 123
    })).toBeTruthy()
  })
  it('can build lt', () => {
    const condition: Condition = {
      foo: {
        $lt: 123
      }
    }
    const fn = conditionFunctionBuilder(condition)

    expect(fn({
      foo: 456
    })).toBeFalsy()
    expect(fn({
      foo: 123
    })).toBeFalsy()
  })
  it('can build in', () => {
    const condition: Condition = {
      foo: {
        $in: [123, 456]
      }
    }
    const fn = conditionFunctionBuilder(condition)

    expect(fn({
      foo: 456
    })).toBeTruthy()
    expect(fn({
      foo: 123
    })).toBeTruthy()
    expect(fn({
      foo: 12
    })).toBeFalsy()
  })
  it('can check nested value', () => {
    const condition: Condition = {
      'foo.bar': {
        $eq: 123
      }
    }
    const fn = conditionFunctionBuilder(condition)

    expect(fn({
      foo: {
        bar: 123
      }
    })).toBeTruthy()
    expect(fn({
      foo: {
        bar: 456
      }
    })).toBeFalsy()
  })
})
