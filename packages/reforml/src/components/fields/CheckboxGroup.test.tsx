import { Fields, FormValue } from '../../types'
import { act } from 'react-dom/test-utils'
import { BaseForm } from '../..'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

describe('CheckboxGroup', () => {
  it('can render minimal checkbox group', () => {
    const fields: Fields = {
      myField: {
        type: 'checkbox_group',
        options: {
          a: 'a'
        }
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
        type: 'checkbox_group',
        options: [0, 1, 2, 3]
      }
    }
    let value: FormValue = {}
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    const { rerender } = render(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    const input = screen.getAllByRole('checkbox')
    expect(input.length).toBeTruthy()
    if (input.length > 0) {
      act(() => {
        fireEvent.click(input[0])
      })
      expect(value.myField).toEqual([0])
      rerender(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
      act(() => {
        fireEvent.click(input[1])
      })
      expect(value.myField).toEqual([0, 1])
      act(() => {
        fireEvent.click(input[0])
      })
      expect(value.myField).toEqual([1])
    }
  })
})
