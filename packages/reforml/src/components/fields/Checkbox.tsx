import { FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { HelperText } from './HelperText'
import { LabelText } from './LabelText'
import { BoolFieldComponent } from '../../types/fields/bool'

export const Checkbox: BoolFieldComponent<unknown> = ({
  helperText,
  onChange,
  value,
  label,
  defaultVal,
  trueValue,
  falseValue,
  ...props
}) => {
  const flag: boolean = (typeof value === 'boolean' ? value : trueValue !== undefined && value === trueValue)
  const handleChange = (): void => {
    const newValue = !flag
    if (newValue) {
      if (trueValue !== undefined) {
        onChange?.(trueValue)
      } else {
        onChange?.(true)
      }
    } else {
      onChange?.(falseValue)
    }
  }
  return (
    <label className='form-check'>
      <input type='checkbox' onChange={handleChange} checked={flag} {...props} />
      <LabelText>
        {label}
      </LabelText>
      <div>
        {(helperText !== undefined ? <HelperText>{helperText}</HelperText> : null)}
      </div>
    </label>
  )
}

Checkbox.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.any
}
