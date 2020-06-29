import { useBaseComponents } from '../BaseComponentsContext'
import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'

export const FieldDecorationPropTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
}

export type FieldDecorationComponent = FunctionComponent<PropTypes.InferProps<typeof FieldDecorationPropTypes>>
export const FieldDecoration: FieldDecorationComponent = ({
  helperText,
  label,
  children
}) => {
  const { HelperText, LabelText } = useBaseComponents()
  return (
    <label>
      {label !== undefined ? <LabelText>{label}</LabelText> : null}
      {children}
      {(helperText !== undefined ? <HelperText>{helperText}</HelperText> : null)}
    </label>
  )
}

FieldDecoration.propTypes = FieldDecorationPropTypes
