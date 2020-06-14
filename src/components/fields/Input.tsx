import { FieldComponent, FieldPropTypes } from '../../type'
import React from 'react'
import PropTypes from 'prop-types'

export const Input: FieldComponent<string> = ({
  helperText,
  onChange,
  value,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }
  return (
    <React.Fragment>
      <input {...props} onChange={handleChange} value={value}/>
      {(helperText !== undefined ? <p>{helperText}</p> : null)}
    </React.Fragment>
  )
}

Input.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.string
}
