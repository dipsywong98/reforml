import { useBaseComponents } from '../BaseComponentsContext'
import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'

export const FieldDecorationPropTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  errors: PropTypes.array,
  children: PropTypes.node,
  noLabel: PropTypes.bool
}

export type FieldDecorationComponent = FunctionComponent<PropTypes.InferProps<typeof FieldDecorationPropTypes>>
export const FieldDecoration: FieldDecorationComponent = (
  {
    noLabel = false,
    helperText,
    label,
    required,
    errors,
    children
  }
) => {
  const { HelperText, LabelText, Error, Box } = useBaseComponents()
  const content = (
    <React.Fragment>
      {label !== undefined ? <LabelText>{label}{required ?? false ? <Error> *</Error> : null}</LabelText> : null}
      {children}
      {((helperText !== undefined || (errors !== undefined && errors !== null)) ? <HelperText>{helperText}{
        ((errors !== undefined && errors !== null) ? <Box><Error>{errors.join()}</Error></Box> : null)
      }</HelperText> : null)}
    </React.Fragment>
  )
  return (
    noLabel ?? false ? (
      <Box>
        {content}
      </Box>
    ) : (
      <label>
        {content}
      </label>
    )
  )
}

FieldDecoration.propTypes = FieldDecorationPropTypes
