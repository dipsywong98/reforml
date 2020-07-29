import { Fields, FormValue } from '../../types'
import { act } from 'react-dom/test-utils'
import { render } from 'react-dom'
import { BaseForm } from '../..'
import React from 'react'
import { container } from '../../utils/testHelper'
import { fireEvent } from '@testing-library/react'
import { ObjectInput } from './ObjectInput'

describe('ObjectInput', () => {
  it('can render minimal object form', () => {
    const fields: Fields = {
      myField: {
        type: 'object',
        fields: {
          f1: {
            type: 'text'
          }
        }
      }
    }
    const mockFn = jest.fn(() => '')
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={{}}/>, container)
    })
    expect(mockFn).not.toHaveBeenCalled()
    expect(container?.querySelector('input[name="f1"]')).toBeTruthy()
  })

  it('can input value', () => {
    const fields: Fields = {
      myField: {
        type: 'object',
        fields: {
          f1: {
            type: 'text'
          }
        }
      }
    }
    let value: FormValue = {}
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={value}/>, container)
    })
    expect(mockFn).not.toHaveBeenCalled()
    const input = container?.querySelector('input[name="f1"]')
    expect(input).toBeTruthy()
    if (input !== null && input !== undefined) {
      act(() => {
        fireEvent.change(input, { target: { value: 'some value' } })
      })
      expect(value.myField).toEqual({
        f1: 'some value'
      })
    }
  })

  it('can compute default value', () => {
    const fields: Fields = {
      myField: {
        type: 'object',
        fields: {
          f1: {
            type: 'text',
            defaultVal: 'default value'
          }
        }
      }
    }
    let value: FormValue = {}
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={value}/>, container)
    })
    expect(mockFn).toHaveBeenCalled()

    expect(value).toEqual({
      myField: {
        f1: 'default value'
      }
    })
  })

  it('should throw Error if onChange is not given', () => {
    const t = (): void => {
      render(<ObjectInput />, container)
    }
    expect(t).toThrow(Error)
  })

  it('should throw MissingAttributeError if field is not given', () => {
    const t = (): void => {
      render(<ObjectInput onChange={() => {}}/>, container)
    }
    expect(t).toThrow(Error)
  })
})
