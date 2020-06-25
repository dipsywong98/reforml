import { FieldComponent, FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'

export const TextInput: FieldComponent<string> = ({
  helperText,
  onChange,
  value,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value, event)
  }
  return (
    <React.Fragment>
      <input {...props} onChange={handleChange} value={value}/>
      {(helperText !== undefined ? <p>{helperText}</p> : null)}
    </React.Fragment>
  )
}

TextInput.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.string
}
