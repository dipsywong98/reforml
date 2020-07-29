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
  const handleChange = (value: string | { target: { value: string } }): void => {
    let str = ''
    if (typeof value === 'string') {
      str = value
    } else if ('value' in value.target) {
      str = value.target.value
    }
    if (str === '') {
      onChange?.(null as unknown as number)
    } else {
      onChange?.(Number.parseFloat(str))
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
