import React from 'react'
import { FieldPropTypes } from '../../types'
import { useProcessOptionsMemo } from '../../hooks/useProcessOptionsMemo'
import { OptionsFieldComponent } from '../../types/fields'
import { useBaseComponents } from '../BaseComponentsContext'
import { FieldDecoration } from '../base/FieldDecoration'
import { partitionDecorationProps } from '../../utils/partitionDecorationProps'

const propTypes = {
  ...FieldPropTypes
}

export const Select: OptionsFieldComponent<unknown> = (props) => {
  const { helperText, label, options, value, onChange, valueKey, labelKey, defaultVal, ...otherProps } = props
  const valueLabel = useProcessOptionsMemo<unknown>(options, { labelKey, valueKey })

  const { BaseSelect } = useBaseComponents()
  const [decorationProps] = partitionDecorationProps(props)

  return (
    <FieldDecoration {...decorationProps}>
      <BaseSelect options={valueLabel} value={value} onChange={onChange} {...otherProps} />
    </FieldDecoration>
  )
}

Select.propTypes = propTypes
