import { FieldPropTypes, MultiSelectFieldComponent, MultiSelectValue } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { useFieldComponents } from '../FieldComponentsContext'
import { useProcessOptionsMemo } from '../../hooks/useProcessOptionsMemo'
import { useProcessMultiSelectMemo } from '../../hooks/useProcessMultiSelectMemo'
import { FieldDecoration } from './FieldDecoration'

export const CheckboxGroup: MultiSelectFieldComponent<MultiSelectValue<unknown>> = ({
  helperText,
  onChange,
  value,
  label,
  options,
  valueKey,
  labelKey,
  output
}) => {
  const Checkbox = useFieldComponents().checkbox
  const valueLabel = useProcessOptionsMemo<unknown>(options, { labelKey, valueKey })
  const [flags, setFlag] = useProcessMultiSelectMemo(onChange, value, output)
  return (
    <FieldDecoration label={label} helperText={helperText}>
      {valueLabel.map(({ value, label, ...otherProps }) => (
        <Checkbox key={label} {...otherProps} label={label} value={flags.has(value)} onChange={setFlag(value)} />
      ))}
    </FieldDecoration>
  )
}

CheckboxGroup.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.any
}
