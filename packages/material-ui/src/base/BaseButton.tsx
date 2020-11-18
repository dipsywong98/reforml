import React, { FunctionComponent } from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

export const BaseButton: FunctionComponent = (props) => {
  return <Button {...props} variant='contained'/>
}

BaseButton.propTypes = {
  children: PropTypes.any
}
