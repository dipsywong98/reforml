import { FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { BoolFieldComponent } from '../../types/fields/bool'
import { useBaseComponents } from '../BaseComponentsContext'
import { useProcessBool } from '../../hooks/useProcessBool'
import { partitionDecorationProps } from '../../utils/partitionDecorationProps'

export const Checkbox: BoolFieldComponent<unknown> = (props) => {
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
  const { Label, FieldDecoration, BaseCheckbox, Flex, Box } = useBaseComponents()
  const [decorationProps] = partitionDecorationProps(props)
  return (
    <Box>
      <Label>
        <Flex>
          <Box>
            <BaseCheckbox onChange={handleChange} checked={flag} {...otherProps} />
          </Box>
          <FieldDecoration {...decorationProps} noLabel/>
        </Flex>
      </Label>
    </Box>
  )
}

Checkbox.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.any
}
