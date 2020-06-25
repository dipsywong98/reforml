import React, { useMemo } from 'react'
import { FieldComponent, FieldPropTypes } from '../../types'
import { processOptions } from '../../utils/processOptions'

const propTypes = {
  ...FieldPropTypes
}

export const Select: FieldComponent<string | number> = ({ options, value, onChange, valueKey, labelKey }) => {
  const valueLabel = useMemo(
    () => (
      options !== undefined
        ? processOptions(options, {
          valueKey,
          labelKey
        })
        : []
    ),
    [options]
  )
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(event)
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
