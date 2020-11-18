import { BasicFieldComponent, FieldPropTypes } from 'reforml'
import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

export const MaterialTextInput: BasicFieldComponent<string> = (props) => {
  const { defaultVal, value, ...otherProps } = props
  return (
    <TextField {...otherProps} value={value ?? ''}/>
  )
}

MaterialTextInput.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.string
}
