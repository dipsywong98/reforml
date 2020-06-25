import React from 'react'
import PropTypes from 'prop-types'
import { FieldComponent, FieldPropTypes } from '../../types'

const propTypes = {
  ...FieldPropTypes,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export const Select: FieldComponent<string | number> = ({ options }) => {
  return (
    <select>
      {options?.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}

Select.propTypes = propTypes
