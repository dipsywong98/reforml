import { BaseForm } from './BaseForm'
import { render } from 'react-dom'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { Fields, FormValue } from '../../types'
import { container } from '../../utils/testHelper'

describe('BaseForm', () => {
  it('generates no errors when no fields', () => {
    const fields: Fields = {}
    const mockFn = jest.fn(() => '')
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={{}}/>, container)
    })
    expect(mockFn).not.toHaveBeenCalled()
    expect(BaseForm).toBeTruthy()
    expect(container?.textContent).toBe('')
  })

  it('can input default string value', () => {
    const fields: Fields = {
      defaultValueField: {
        type: 'text',
        default: 'default'
      },
      existingValueField: {
        type: 'text',
        default: 'another default'
      }
    }
    let value: FormValue = { existingValueField: 'existing value' }
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={value}/>, container)
    })
    const input = container?.querySelector('input[name="defaultValueField"]')
    expect(input).toBeTruthy()
    if (input !== null && input !== undefined) {
      expect(value.defaultValueField).toEqual('default')
    }
    const input2 = container?.querySelector('input[name="existingValueField"]')
    expect(input2).toBeTruthy()
    if (input2 !== null && input2 !== undefined) {
      expect(value.existingValueField).toEqual('existing value')
    }
  })
})
