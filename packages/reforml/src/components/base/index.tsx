import React, { FunctionComponent } from 'react'
import { BaseFieldComponent, BaseSelectComponent, BaseSelectPropTypes } from '../../types'
import { BaseBoolComponent } from '../../types/fields/bool'
import { FieldDecorationComponent, FieldDecorationPropTypes } from './FieldDecoration'
import PropTypes from 'prop-types'

export const BaseInput: FunctionComponent = (props) => <input className='form-control' {...props}/>
BaseInput.defaultProps = {
  value: ''
}

export const BaseSelect: BaseSelectComponent<unknown> = ({ value = '', options, onChange, ...props }) => {
  const handleChange = ({ target: { value } }: { target: { value: string } }): void => {
    onChange?.(options[Number.parseInt(value)]?.value)
  }
  return (
    <select className='form-control' onChange={handleChange} value={options.findIndex(({ value: v }) => value === v) ?? ''} {...props}>
      <option value="">{props.placeholder}</option>
      {options.map(({ label }, index) => (
        <option key={label} value={index}>{label}</option>
      ))}
    </select>
  )
}

BaseSelect.propTypes = BaseSelectPropTypes

export const BaseCheckbox: FunctionComponent = (props) => (
  <input
    className='form-check-input'
    type='checkbox'
    {...props}
  />)

export const HelperText: FunctionComponent = (props) => <small className='box form-text text-muted' {...props} />

export const LabelText: FunctionComponent = (props) => <span className='box form-label' {...props} />

export const Label: FunctionComponent = (props) => <label {...props} />

export const FieldWrapper: FunctionComponent = (props) => <div className='reforml-form-group' {...props} />

export { FieldDecoration } from './FieldDecoration'

export const ListInputDecoration: FieldDecorationComponent = ({ required, errors, label, helperText, children, ...props }) => (
  <div>
    <div className='list-input-decoration' {...props}>
      {label !== undefined ? <div className='list-input-label'>
        <div>
          {label}{required ?? false ? <Error> *</Error> : null}
        </div>
      </div> : null}
      <div>
        {children}
      </div>
    </div>
    {((helperText !== undefined || (errors !== undefined && errors !== null)) ? <HelperText>{helperText}{
      ((errors !== undefined && errors !== null) ? <Box><Error>{errors.join()}</Error></Box> : null)
    }</HelperText> : null)}
  </div>
)
ListInputDecoration.propTypes = FieldDecorationPropTypes

export const ObjectInputDecoration: FieldDecorationComponent = ({ required, errors, label, helperText, children, ...props }) => (
  <div>
    <div className='object-input-decoration' {...props}>
      {label !== undefined ? <div className='object-input-label'>
        {label}{required ?? false ? <Error> *</Error> : null}
      </div> : null}
      <div>
        {children}
      </div>
    </div>
    {((helperText !== undefined || (errors !== undefined && errors !== null)) ? <HelperText>{helperText}{
      ((errors !== undefined && errors !== null) ? <Box><Error>{errors.join()}</Error></Box> : null)
    }</HelperText> : null)}
  </div>
)
ObjectInputDecoration.propTypes = FieldDecorationPropTypes

export const ListInputCreateBox: FunctionComponent = (props) => <div className='list-input-create-box' {...props}/>

export const Flex: FunctionComponent<{ className?: string, style?: Record<string, string> }> = ({ className = '', ...props }) =>
  <div className={`flex ${className}`} {...props}/>
Flex.propTypes = {
  className: PropTypes.string
}

export const Box: FunctionComponent<{ className?: string, style?: Record<string, string> }> = ({ className = '', ...props }) =>
  <div className={`box ${className}`} {...props}/>
Box.propTypes = {
  className: PropTypes.string
}

export const Button: FunctionComponent<{ className?: string }> = ({ className = '', ...props }) =>
  <button className={`btn ${className}`} {...props}/>
Button.propTypes = {
  className: PropTypes.string
}

export const Error: FunctionComponent = (props) => <small style={{ color: 'red' }} {...props}/>

export interface BaseComponents {
  BaseInput: BaseFieldComponent<string>
  BaseSelect: BaseSelectComponent<unknown>
  BaseCheckbox: BaseBoolComponent<unknown>
  HelperText: FunctionComponent
  LabelText: FunctionComponent
  FieldWrapper: FunctionComponent
  ListInputDecoration: FieldDecorationComponent
  ObjectInputDecoration: FieldDecorationComponent
  ListInputCreateBox: FunctionComponent
  FieldDecoration: FieldDecorationComponent
  Flex: FunctionComponent<{ className?: string, style?: Record<string, string> }>
  Box: FunctionComponent<{ className?: string, style?: Record<string, string> }>
  Button: FunctionComponent<{ className?: string } & React.HTMLProps<HTMLButtonElement>>
  Error: FunctionComponent
  Label: FunctionComponent
}
