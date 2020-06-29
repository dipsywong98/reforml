import React from 'react'
import { FieldPropTypes } from '../../types'
import { useProcessOptionsMemo } from '../../hooks/useProcessOptionsMemo'
import { OptionsFieldComponent } from '../../types/fields'
import { useBaseComponents } from '../BaseComponentsContext'
import { FieldDecoration } from '../base/FieldDecoration'

const propTypes = {
  ...FieldPropTypes
}

export const Select: OptionsFieldComponent<string | number> = ({ helperText, label, options, value, onChange, valueKey, labelKey, defaultVal, ...props }) => {
  const valueLabel = useProcessOptionsMemo<string | number>(options, { labelKey, valueKey })

  const { BaseSelect } = useBaseComponents()
  return (
    <FieldDecoration helperText={helperText} label={label}>
      <BaseSelect options={valueLabel} value={value} onChange={onChange} {...props} />
    </FieldDecoration>
  )
}

Select.propTypes = propTypes
