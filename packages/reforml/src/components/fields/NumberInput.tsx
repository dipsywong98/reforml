import { FieldComponent, FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from './TextInput'

export const NumberInput: FieldComponent<number> = ({
  onChange,
  value,
  defaultValue,
  ...props
}) => {
  const handleChange = (value: string): void => {
    onChange?.(Number.parseFloat(value))
  }
  return (
    <TextInput
      onChange={handleChange}
      type='number'
      {...props}
      value={value?.toString()}
      defaultValue={defaultValue?.toString()}
    />
  )
}

NumberInput.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.number
}
