import { FieldPropTypes, MultiSelectFieldComponent, MultiSelectValue } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { useFieldComponents } from '../FieldComponentsContext'
import { useProcessOptionsMemo } from '../../hooks/useProcessOptionsMemo'
import { useProcessMultiSelectMemo } from '../../hooks/useProcessMultiSelectMemo'
import { FieldDecoration } from '../base/FieldDecoration'
import { useBaseComponents } from '../BaseComponentsContext'
import { partitionDecorationProps } from '../../utils/partitionDecorationProps'

export const CheckboxGroup: MultiSelectFieldComponent<MultiSelectValue<unknown>> = (props) => {
  const {
    onChange,
    value,
    options,
    valueKey,
    labelKey,
    output
  } = props
  const Checkbox = useFieldComponents().checkbox
  const valueLabel = useProcessOptionsMemo<unknown>(options, { labelKey, valueKey })
  const [flags, setFlag] = useProcessMultiSelectMemo(onChange, value, output)
  const { Box } = useBaseComponents()
  const [decorationProps] = partitionDecorationProps(props)
  return (
    <Box>
      <FieldDecoration {...decorationProps}>
      </FieldDecoration>
      {valueLabel.map(({ value, label, ...otherProps }) => (
        <Checkbox key={label} {...otherProps} label={label} value={flags.has(value)} onChange={setFlag(value)}/>
      ))}
    </Box>
  )
}

CheckboxGroup.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.any
}
