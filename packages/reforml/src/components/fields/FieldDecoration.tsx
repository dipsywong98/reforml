import { useBaseComponents } from '../BaseComponentsContext'
import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'

export const FieldDecorationPropTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
}

export const FieldDecoration: FunctionComponent<PropTypes.InferProps<typeof FieldDecorationPropTypes>> = ({
  helperText,
  label,
  children
}) => {
  const { HelperText, LabelText } = useBaseComponents()
  return (
    <label>
      <LabelText>
        {label}
      </LabelText>
      <div>
        {children}
      </div>
      <div>
        {(helperText !== undefined ? <HelperText>{helperText}</HelperText> : null)}
      </div>
    </label>
  )
}

FieldDecoration.propTypes = FieldDecorationPropTypes
