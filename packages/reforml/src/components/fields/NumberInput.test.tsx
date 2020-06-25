import { Fields, FormValue } from '../../types'
import { act } from 'react-dom/test-utils'
import { render } from 'react-dom'
import { BaseForm } from '../..'
import React from 'react'
import { container } from '../../utils/testHelper'
import { fireEvent } from '@testing-library/react'

describe('NumberInput', () => {
  it('can render minimal text field', () => {
    const fields: Fields = {
      myField: {
        type: 'number'
      }
    }
    const mockFn = jest.fn(() => '')
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={{}}/>, container)
    })
    expect(mockFn).not.toHaveBeenCalled()
    expect(container?.querySelector('input[name="myField"]')).toBeTruthy()
  })

  it('can input number value', () => {
    const fields: Fields = {
      myField: {
        type: 'number'
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
    const input = container?.querySelector('input[name="myField"]')
    expect(input).toBeTruthy()
    if (input !== null && input !== undefined) {
      act(() => {
        fireEvent.change(input, { target: { value: '123' } })
      })
      expect(value.myField).toEqual(123)
    }
  })
})
