import React from 'react'
import PropTypes from 'prop-types'
import { BoolFieldComponent, FieldPropTypes, useProcessBool } from 'reforml'
import { Checkbox, FormControlLabel, FormGroup, FormHelperText } from '@material-ui/core'

export const MaterialCheckbox: BoolFieldComponent<unknown> = (props) => {
  const {
    helperText,
    onChange,
    value,
    label,
    defaultVal,
    trueValue,
    falseValue,
    ...otherProps
  } = props
  const [flag, handleChange] = useProcessBool(value, onChange, { trueValue, falseValue })
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={flag} onChange={handleChange} {...otherProps} />}
        label={<div>
          {label}
          <FormHelperText>{helperText}</FormHelperText>
        </div>}
      />
    </FormGroup>
  )
}

MaterialCheckbox.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.any
}
