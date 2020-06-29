import React, { FunctionComponent } from 'react'
import { BaseFieldComponent, BaseSelectComponent, BaseSelectPropTypes } from '../../types'
import { BaseBoolComponent } from '../../types/fields/bool'
import { FieldDecoration, FieldDecorationComponent, FieldDecorationPropTypes } from './FieldDecoration'
import PropTypes from 'prop-types'

export const BaseInput: FunctionComponent = (props) => <input className='form-control' {...props}/>

export const BaseSelect: BaseSelectComponent<string | number> = ({ options, ...props }) => (
  <select className='form-control' {...props}>
    {options.map(({ value, label }) => (
      <option key={label} value={value}>{label}</option>
    ))}
  </select>
)

BaseSelect.propTypes = BaseSelectPropTypes

export const BaseCheckbox: FunctionComponent = (props) => <input className='form-check-input' type='checkbox' {...props} />

export const HelperText: FunctionComponent = ({ ...props }) => <small className='box form-text text-muted' {...props} />

export const LabelText: FunctionComponent = ({ ...props }) => <label className='box form-label' {...props} />

export const FieldWrapper: FunctionComponent = ({ ...props }) => <div className='reforml-form-group' {...props} />

export { FieldDecoration } from './FieldDecoration'

export const ListInputDecoration: FieldDecorationComponent = ({ label, helperText, children, ...props }) => (
  <div className='list-input-decoration' {...props}>
    {label !== undefined ? <div className='list-input-label'>
      {label}
    </div> : null}
    <FieldDecoration helperText={helperText}>
      {children}
    </FieldDecoration>
  </div>
)
ListInputDecoration.propTypes = FieldDecorationPropTypes

export const ObjectInputDecoration: FieldDecorationComponent = ({ label, helperText, children, ...props }) => (
  <div className='object-input-decoration' {...props}>
    {label !== undefined ? <div className='object-input-label'>
      {label}
    </div> : null}
    <FieldDecoration helperText={helperText}>
      {children}
    </FieldDecoration>
  </div>
)
ObjectInputDecoration.propTypes = FieldDecorationPropTypes

export const ListInputCreateBox: FunctionComponent = (props) => <div className='list-input-create-box' {...props}/>

export const Flex: FunctionComponent<{className?: string}> = ({ className = '', ...props }) => <div className={`flex ${className}`} {...props}/>
Flex.propTypes = {
  className: PropTypes.string
}

export const Box: FunctionComponent<{className?: string}> = ({ className = '', ...props }) => <div className={`box ${className}`} {...props}/>
Box.propTypes = {
  className: PropTypes.string
}

export const Button: FunctionComponent<{className?: string}> = ({ className = '', ...props }) => <button className={`btn ${className}`} {...props}/>
Button.propTypes = {
  className: PropTypes.string
}

export interface BaseComponents {
  BaseInput: BaseFieldComponent<string>
  BaseSelect: BaseSelectComponent<string | number>
  BaseCheckbox: BaseBoolComponent<unknown>
  HelperText: FunctionComponent
  LabelText: FunctionComponent
  FieldWrapper: FunctionComponent
  ListInputDecoration: FieldDecorationComponent
  ObjectInputDecoration: FieldDecorationComponent
  ListInputCreateBox: FunctionComponent
  FieldDecoration: FieldDecorationComponent
  Flex: FunctionComponent<{className?: string}>
  Box: FunctionComponent<{className?: string}>
  Button: FunctionComponent<{className?: string}& React.HTMLProps<HTMLButtonElement>>
}
