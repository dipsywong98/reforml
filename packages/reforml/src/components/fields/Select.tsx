import React, { useMemo } from 'react'
import { FieldPropTypes } from '../../types'
import { processOptions } from '../../utils/processOptions'
import { OptionsFieldComponent } from '../../types/fields'
import { useBaseComponents } from '../BaseComponentsContext'
import { FieldDecoration } from './FieldDecoration'

const propTypes = {
  ...FieldPropTypes
}

export const Select: OptionsFieldComponent<string | number> = ({ helperText, label, options, value, onChange, valueKey, labelKey, ...props }) => {
  const valueLabel = useMemo(
    () => (
      options !== undefined
        ? processOptions<string | number>(options, {
          valueKey,
          labelKey
        })
        : []
    ),
    [options]
  )

  const { BaseSelect } = useBaseComponents()
  return (
    <FieldDecoration helperText={helperText} label={label}>
      <BaseSelect options={valueLabel} value={value} onChange={onChange} {...props} />
    </FieldDecoration>
  )
}

Select.propTypes = propTypes
