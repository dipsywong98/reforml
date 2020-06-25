import { FieldComponent, FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'

export const NumberInput: FieldComponent<number> = ({
  helperText,
  onChange,
  value,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(Number.parseFloat(event.target.value))
  }
  return (
    <React.Fragment>
      <input {...props} type='number' onChange={handleChange} value={value}/>
      {(helperText !== undefined ? <p>{helperText}</p> : null)}
    </React.Fragment>
  )
}

NumberInput.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.number
}
