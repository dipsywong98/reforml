import { Fields, FormValue } from '../../types'
import { act } from 'react-dom/test-utils'
import { render } from 'react-dom'
import { BaseForm } from '../..'
import React from 'react'
import { container } from '../../utils/testHelper'
import { fireEvent } from '@testing-library/react'

describe('Select', () => {
  it('can render minimal text field', () => {
    const fields: Fields = {
      myField: {
        type: 'select'
      }
    }
    const mockFn = jest.fn(() => '')
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={{}}/>, container)
    })
    expect(mockFn).not.toHaveBeenCalled()
    expect(container?.querySelector('select[name="myField"]')).toBeTruthy()
  })

  it('can select value', () => {
    const fields: Fields = {
      myField: {
        type: 'select',
        options: ['a', 'b', 'c']
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
    const select = container?.querySelector('select[name="myField"]')
    expect(select).toBeTruthy()
    expect(select?.childElementCount).toEqual(3)
    if (select !== null && select !== undefined) {
      act(() => {
        fireEvent.change(select, { target: { value: 'c' } })
      })
      expect(value.myField).toEqual('c')
    }
  })
})
