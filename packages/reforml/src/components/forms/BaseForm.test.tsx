import { BaseForm } from './BaseForm'
import { render } from 'react-dom'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { FieldComponent, FieldComponents, FieldPropTypes, Fields, FormValue } from '../../types'
import { container } from '../../utils/testHelper'
import { DefaultComponents } from '../fields'
import { ReformlProvider } from '../ReformlContext'
import { fireEvent } from '@testing-library/react'

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
    const components: FieldComponents = {
      ...DefaultComponents,
      text: MyText,
      oldText: DefaultComponents.text
    }
    act(() => {
      render(<ReformlProvider value={{ components }}>
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
})
