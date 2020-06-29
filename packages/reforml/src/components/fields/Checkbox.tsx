import { FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { BoolFieldComponent } from '../../types/fields/bool'
import { useBaseComponents } from '../BaseComponentsContext'
import { useProcessBool } from '../../hooks/useProcessBool'

export const Checkbox: BoolFieldComponent<unknown> = ({
  helperText,
  onChange,
  value,
  label,
  defaultVal,
  trueValue,
  falseValue,
  ...props
}) => {
  const [flag, handleChange] = useProcessBool(value, onChange, { trueValue, falseValue })
  const { LabelText, HelperText, BaseCheckbox, Flex, Box } = useBaseComponents()
  return (
    <Box>
      <LabelText>
        <Flex>
          <Box>
            <BaseCheckbox onChange={handleChange} checked={flag} {...props} />
          </Box>
          <Box>
            <Box>
              {label}
            </Box>
            <Box>
              {(helperText !== undefined ? <HelperText>{helperText}</HelperText> : null)}
            </Box>
          </Box>
        </Flex>
      </LabelText>
    </Box>
  )
}

Checkbox.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.any
}
