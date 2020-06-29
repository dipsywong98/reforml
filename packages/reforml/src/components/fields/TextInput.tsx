import { FieldComponent, FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { useBaseComponents } from '../BaseComponentsContext'
import { FieldDecoration } from '../base/FieldDecoration'

export const TextInput: FieldComponent<string> = ({
  helperText,
  onChange,
  value,
  label,
  defaultVal,
  ...props
}) => {
  const { BaseInput } = useBaseComponents()
  return (
    <FieldDecoration label={label} helperText={helperText}>
      <BaseInput {...props} onChange={onChange} value={value}/>
    </FieldDecoration>
  )
}

TextInput.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.string
}
