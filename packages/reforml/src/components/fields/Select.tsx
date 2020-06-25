import React, { useMemo } from 'react'
import { FieldPropTypes } from '../../types'
import { processOptions } from '../../utils/processOptions'
import { OptionsFieldComponent } from '../../types/fields/options'

const propTypes = {
  ...FieldPropTypes
}

export const Select: OptionsFieldComponent<string|number> = ({ options, value, onChange, valueKey, labelKey }) => {
  const valueLabel = useMemo(
    () => (
      options !== undefined
        ? processOptions<string|number>(options, {
          valueKey,
          labelKey
        })
        : []
    ),
    [options]
  )
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(event.target.value)
  }
  return (
    <select value={value} onChange={handleChange}>
      {valueLabel?.map(({ value, label }) => (
        <option key={label} value={value}>{label}</option>
      ))}
    </select>
  )
}

Select.propTypes = propTypes
