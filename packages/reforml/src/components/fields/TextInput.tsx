import { FieldComponent, FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { HelperText } from './HelperText'
import { LabelText } from './LabelText'

export const TextInput: FieldComponent<string> = ({
  helperText,
  onChange,
  value,
  label,
  defaultVal,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value)
  }
  return (
    <label>
      <LabelText>
        {label}
      </LabelText>
      <div>
        <input className='form-control' {...props} onChange={handleChange} value={value}/>
      </div>
      <div>
        {(helperText !== undefined ? <HelperText>{helperText}</HelperText> : null)}
      </div>
    </label>
  )
}

TextInput.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.string
}
