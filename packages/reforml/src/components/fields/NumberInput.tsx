import { BasicFieldComponent, FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from './TextInput'

export const NumberInput: BasicFieldComponent<number> = ({
  onChange,
  value,
  defaultVal,
  ...props
}) => {
  const handleChange = (value: string | {target: {value: string}}): void => {
    if (typeof value === 'string') {
      onChange?.(Number.parseFloat(value))
    } else if ('value' in value.target) {
      onChange?.(Number.parseFloat(value.target.value))
    }
  }
  return (
    <TextInput
      onChange={handleChange}
      type='number'
      {...props}
      value={value?.toString()}
      defaultVal={defaultVal?.toString()}
    />
  )
}

NumberInput.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.number
}
