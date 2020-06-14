import { Fields, FormValue } from '../../type'
import { act } from 'react-dom/test-utils'
import { render } from 'react-dom'
import { BaseForm } from '../BaseForm'
import React from 'react'
import { container } from '../../utils/testHelper'
import { fireEvent } from '@testing-library/react'

describe('Input', () => {
  it('can render minimal text field', () => {
    const fields: Fields = {
      myField: {
        type: 'text'
      }
    }
    const mockFn = jest.fn(() => '')
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={{}}/>, container)
    })
    expect(mockFn).not.toHaveBeenCalled()
    expect(container?.querySelector('input[name="myField"]')).toBeTruthy()
  })

  it('can input string value', () => {
    const fields: Fields = {
      myField: {
        type: 'text'
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
        fireEvent.change(input, { target: { value: 'some value' } })
      })
      expect(value.myField).toEqual('some value')
    }
  })
})
