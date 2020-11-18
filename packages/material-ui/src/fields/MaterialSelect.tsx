import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'
import {
  BaseSelectComponent,
  BaseSelectPropTypes,
  FieldPropTypes,
  OptionsFieldComponent,
  useProcessOptionsMemo
} from 'reforml'

const propTypes = {
  ...FieldPropTypes
}

export const BaseSelect: BaseSelectComponent<unknown> = ({ value = '', options, onChange, ...props }) => {
  const handleChange = ({ target: { value } }: { target: { value: unknown } }): void => {
    onChange?.(options[Number.parseInt(value as string)]?.value)
  }
  const index = options.findIndex(({ value: v }) => value === v)
  return (
    <TextField
      select
      onChange={handleChange}
      value={index < 0 ? '' : index}
      {...props}>
      {props.placeholder && <MenuItem value="">{props.placeholder}</MenuItem>}
      {options.map(({ label }, index) => (
        <MenuItem key={label} value={index}>{label}</MenuItem>
      ))}
    </TextField>
  )
}

BaseSelect.propTypes = BaseSelectPropTypes

export const MaterialSelect: OptionsFieldComponent<unknown> = (props) => {
  const { options, value, onChange, valueKey, labelKey, defaultVal, ...otherProps } = props
  const valueLabel = useProcessOptionsMemo<unknown>(options, { labelKey, valueKey })

  return (
    <BaseSelect options={valueLabel} value={value} onChange={onChange} {...otherProps} />
  )
}

MaterialSelect.propTypes = propTypes
