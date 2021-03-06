import { BaseForm, FormChangeHandler } from './BaseForm'
import { render } from 'react-dom'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { FieldComponent, FieldComponents, FieldPropTypes, Fields, FormValue, ValidateErrors } from '../../types'
import { container } from '../../utils/testHelper'
import { DefaultFieldComponents } from '../fields'
import { fireEvent, screen, render as Render } from '@testing-library/react'
import { ReformlProvider } from '../ReformlProvider'

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
      defaultValField: {
        type: 'text',
        defaultVal: 'default'
      },
      existingValueField: {
        type: 'text',
        defaultVal: 'another default'
      }
    }
    let value: FormValue = { existingValueField: 'existing value' }
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    act(() => {
      render(<BaseForm fields={fields} onChange={mockFn} value={value}/>, container)
    })
    const input = container?.querySelector('input[name="defaultValField"]')
    expect(input).toBeTruthy()
    if (input !== null && input !== undefined) {
      expect(value.defaultValField).toEqual('default')
    }
    const input2 = container?.querySelector('input[name="existingValueField"]')
    expect(input2).toBeTruthy()
    if (input2 !== null && input2 !== undefined) {
      expect(value.existingValueField).toEqual('existing value')
    }
  })

  it('can supply custom field components', () => {
    const fields: Fields = {
      f1: {
        type: 'text'
      },
      f2: {
        type: 'oldText'
      }
    }
    let value: FormValue = { f1: 'existing value' }
    const mockFn = jest.fn((v: FormValue) => {
      value = v
    })
    const MyText: FieldComponent<string> = props => {
      return <div>
        <input id='some random text' name={props.name} onChange={props.onChange} value={props.value}/>
      </div>
    }
    MyText.propTypes = FieldPropTypes
    const components: Partial<FieldComponents> = {
      text: MyText,
      oldText: DefaultFieldComponents.text
    }
    act(() => {
      render(<ReformlProvider fieldComponents={components}>
        <BaseForm fields={fields} onChange={mockFn} value={value}/>
      </ReformlProvider>, container)
    })
    const input = container?.querySelector('input[name="f1"]')
    expect(input).toBeTruthy()
    if (input !== null && input !== undefined) {
      expect(input.id).toContain('some random text')
      act(() => {
        fireEvent.change(input, { target: { value: 'c' } })
      })
      expect(value.f1).toEqual('c')
    }
    const input2 = container?.querySelector('input[name="f2"]')
    expect(input2).toBeTruthy()
  })

  it('can reduce fields', () => {
    const fields: Fields = {
      myField: {
        type: 'text'
      }
    }
    let value = {}
    const onChange: FormChangeHandler<FormValue & { myField?: string }> = (v, { reduceFields }) => {
      reduceFields((fields) => {
        fields.myField.label = `label ${v.myField !== undefined ? v.myField : ''}`
        return fields
      })
      value = v
    }
    const mockFn = jest.fn(onChange)
    const { rerender } = Render(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    expect(mockFn).not.toHaveBeenCalled()
    expect(BaseForm).toBeTruthy()

    const input = screen.getByDisplayValue('')
    expect(input).toBeTruthy()
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(value).toEqual({
      myField: 'new value'
    })
    rerender(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    expect(screen.getByText('label new value')).toBeTruthy()
  })

  it('can validate', () => {
    const fields: Fields = {
      myField: {
        type: 'text',
        required: true
      }
    }
    let value = {}
    let error: ValidateErrors
    const onChange: FormChangeHandler<FormValue & { myField?: string }> = (v, { validate }) => {
      error = validate()
      value = v
    }
    const mockFn = jest.fn(onChange)
    const { rerender } = Render(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    expect(mockFn).not.toHaveBeenCalled()
    expect(BaseForm).toBeTruthy()

    const input = screen.getByDisplayValue('')
    expect(input).toBeTruthy()
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(value).toEqual({
      myField: 'new value'
    })
    expect(error).toEqual(undefined)
    rerender(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
    fireEvent.change(input, { target: { value: '' } })
    expect(value).toEqual({
      myField: ''
    })
    expect(error).toEqual({ myField: ['required'] })
  })

  //
  // it('can get touched fields', () => {
  //   const fields: Fields = {
  //     myField: {
  //       type: 'text'
  //     },
  //     objectField: {
  //       type: 'object',
  //       fields: {
  //         f1: {
  //           type: 'text'
  //         },
  //         f2: {
  //           type: 'text'
  //         }
  //       }
  //     }
  //   }
  //   let value = {}
  //   let touches: Touches = {}
  //   const onChange: FormChangeHandler<FormValue & { myField?: string }> = (v, { touches: t }) => {
  //     value = v
  //     touches = t
  //   }
  //   const mockFn = jest.fn(onChange)
  //   const { rerender } = Render(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
  //   expect(mockFn).not.toHaveBeenCalled()
  //   expect(BaseForm).toBeTruthy()
  //
  //   const inputs = screen.getAllByDisplayValue('')
  //   expect(inputs.length).toEqual(3)
  //   expect(inputs[0]).toBeTruthy()
  //   fireEvent.change(inputs[0], { target: { value: 'new value' } })
  //   expect(value).toEqual({
  //     myField: 'new value'
  //   })
  //   expect('myField' in touches).toBeTruthy()
  //   expect('objectField' in touches).toBeFalsy()
  //   rerender(<BaseForm fields={fields} onChange={mockFn} value={value}/>)
  //   fireEvent.change(inputs[1], { target: { value: 'hi' } })
  //   expect('objectField' in touches).toBeTruthy()
  //   expect(touches.objectField).toEqual({
  //     f1: true
  //   })
  // })
})
