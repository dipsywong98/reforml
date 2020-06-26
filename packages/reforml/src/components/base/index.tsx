import React, { FunctionComponent } from 'react'
import { BaseFieldComponent, BaseSelectComponent, BaseSelectPropTypes } from '../../types'
import { BaseBoolComponent } from '../../types/fields/bool'

export const BaseInput: FunctionComponent = (props) => <input className='form-control' {...props}/>

export const BaseSelect: BaseSelectComponent<string | number> = ({ options, ...props }) => (
  <select className='form-control' {...props}>
    {options.map(({ value, label }) => (
      <option key={label} value={value}>{label}</option>
    ))}
  </select>
)

BaseSelect.propTypes = BaseSelectPropTypes

export const BaseCheckbox: FunctionComponent = (props) => <input className='form-control' type='checkbox' {...props} />

export const HelperText: FunctionComponent = ({ ...props }) => <small className='form-text text-muted' {...props} />

export const LabelText: FunctionComponent = ({ ...props }) => <label className='label-text' {...props} />

export const FieldWrapper: FunctionComponent = ({ ...props }) => <div className='form-group' {...props} />

export interface BaseComponents {
  BaseInput: BaseFieldComponent<string>
  BaseSelect: BaseSelectComponent<string | number>
  BaseCheckbox: BaseBoolComponent<unknown>
  HelperText: FunctionComponent
  LabelText: FunctionComponent
  FieldWrapper: FunctionComponent
}
