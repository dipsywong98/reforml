import { BasicFieldComponent, FieldPropTypes } from '../../types'
import React from 'react'
import PropTypes from 'prop-types'
import { useBaseComponents } from '../BaseComponentsContext'
import { FieldDecoration } from '../base/FieldDecoration'
import { partitionDecorationProps } from '../../utils/partitionDecorationProps'

export const TextInput: BasicFieldComponent<string> = (props) => {
  const {
    helperText,
    onChange,
    value,
    label,
    defaultVal,
    ...otherProps
  } = props
  const { BaseInput } = useBaseComponents()
  const [decorationProps] = partitionDecorationProps(props)

  return (
    <FieldDecoration {...decorationProps}>
      <BaseInput {...otherProps} onChange={onChange} value={value}/>
    </FieldDecoration>
  )
}

TextInput.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.string
}
