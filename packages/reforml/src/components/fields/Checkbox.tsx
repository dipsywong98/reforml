import { FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { BoolFieldComponent } from '../../types/fields/bool'
import { useBaseComponents } from '../BaseComponentsContext'

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
  const { LabelText, HelperText, BaseCheckbox } = useBaseComponents()
  return (
    <label className='form-check'>
      <BaseCheckbox onChange={handleChange} checked={flag} {...props} />
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
