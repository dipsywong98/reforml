import { Fields } from '../../types/fields'
import { FormValue } from '../../types'
import { fireEvent, render, screen } from '@testing-library/react'
import { BaseForm } from '../forms'
import React from 'react'

describe('ListInput', () => {
  it('can handle list of text', () => {
    const fields: Fields = {
      myField: {
        type: 'list',
        of: 'text',
        defaultNewVal: ''
      }
    }
    let value: FormValue = {}
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    const { rerender } = render(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    const input = screen.getByDisplayValue('')
    expect(input).toBeTruthy()
    fireEvent.change(input, { target: { value: 'new value' } })
    rerender(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    const input2 = screen.getByDisplayValue('new value')
    expect(input2).toBeTruthy()
    expect(input).toBe(input2)
    expect(value).toEqual({
      myField: ['new value']
    })
    fireEvent.change(input2, { target: { value: 'edited value' } })
    rerender(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    expect(value).toEqual({
      myField: ['edited value']
    })
    const input3 = screen.getByDisplayValue('edited value')
    expect(input3).toBeTruthy()
    expect(input3).toBe(input2)
    const deleteButton = screen.getByText('Delete')
    expect(deleteButton).toBeTruthy()
    fireEvent.click(deleteButton)
    expect(value).toEqual({
      myField: []
    })
    rerender(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    expect(screen.queryByRole('delete')).toBeFalsy()
  })

  it('can handle creatable deletable and editable attributes', () => {
    const fields: Fields = {
      myField: {
        type: 'list',
        of: 'text',
        defaultVal: ['existing value'],
        defaultNewVal: '',
        creatable: false,
        editable: false,
        deletable: false
      }
    }
    let value: FormValue = {}
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    render(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    const createInput = screen.queryByDisplayValue('')
    expect(createInput).toBeFalsy()
    const deleteButton = screen.queryByRole('delete')
    expect(deleteButton).toBeFalsy()
    const editInput = screen.getByDisplayValue('existing value')
    expect(editInput).toBeTruthy()
    fireEvent.change(editInput, { target: { value: 'edited value' } })
    expect(value).toEqual({
      myField: ['existing value']
    })
  })
})
