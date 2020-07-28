import { Fields, FormValue } from '../../types'
import { act } from 'react-dom/test-utils'
import { BaseForm, FormChangeHandler } from '../..'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Checkbox', () => {
  it('can render minimal checkbox', () => {
    const fields: Fields = {
      myField: {
        type: 'checkbox'
      }
    }
    const mockFn = jest.fn(() => '')
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={{}}/>)
    })
    expect(mockFn).not.toHaveBeenCalled()
    expect(screen.getByRole('checkbox')).toBeTruthy()
  })

  it('can check it', () => {
    const fields: Fields = {
      myField: {
        type: 'checkbox'
      }
    }
    let value: FormValue = {}
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    const { rerender } = render(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    const input = screen.getByRole('checkbox')
    expect(input).toBeTruthy()
    if (input !== null && input !== undefined) {
      act(() => {
        fireEvent.click(input)
      })
      expect(value.myField).toEqual(true)
      rerender(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
      act(() => {
        fireEvent.click(input)
      })
      expect(value.myField).toEqual(undefined)
    }
  })

  it('can check with custom true false value', () => {
    const fields: Fields = {
      myField: {
        type: 'checkbox',
        trueValue: 'true-value',
        falseValue: 'false-value'
      }
    }
    let value: FormValue = {}
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    const { rerender } = render(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    const input = screen.getByRole('checkbox')
    expect(input).toBeTruthy()
    if (input !== null && input !== undefined) {
      act(() => {
        fireEvent.click(input)
      })
      expect(value.myField).toEqual('true-value')
      rerender(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
      act(() => {
        fireEvent.click(input)
      })
      expect(value.myField).toEqual('false-value')
    }
  })
})
