import React from 'react'
import { BaseSelectComponent, BaseSelectPropTypes } from 'reforml'
import { MenuItem, Select } from '@material-ui/core'

export const BaseSelect: BaseSelectComponent<unknown> = ({ value = '', options, onChange, ...props }) => {
  const handleChange = ({ target: { value } }: { target: { value: unknown } }): void => {
    onChange?.(options[Number.parseInt(value as string)]?.value)
  }
  return (
    <Select className='form-control' onChange={handleChange} value={options.findIndex(({ value: v }) => value === v) ?? ''} {...props}>
      <MenuItem value="">{props.placeholder}</MenuItem>
      {options.map(({ label }, index) => (
        <MenuItem key={label} value={index}>{label}</MenuItem>
      ))}
    </Select>
  )
}

BaseSelect.propTypes = BaseSelectPropTypes
