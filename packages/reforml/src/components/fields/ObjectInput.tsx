import { FormValue } from '../../types'
import React from 'react'
import { useBaseComponents } from '../BaseComponentsContext'
import { ObjectFieldComponent, ObjectFieldPropTypes } from '../../types/fields/object'
import { BaseForm } from '../forms'
import { generalizeValueCallback } from '../../utils'
import { MissingAttributeError } from '../../errors'

export const ObjectInput: ObjectFieldComponent<FormValue> = ({
  helperText,
  onChange,
  value,
  label,
  fields,
  defaultVal,
  name,
  type
}) => {
  if (onChange === undefined) {
    throw new Error('onChange is required')
  }
  if (fields === undefined) {
    throw new MissingAttributeError('fields', name, type)
  }
  const { ObjectInputDecoration, Box } = useBaseComponents()
  return (
    <ObjectInputDecoration label={label} helperText={helperText}>
      <Box className='object-item-box'>
        <BaseForm onChange={generalizeValueCallback(onChange)} fields={fields} value={value === undefined ? defaultVal === undefined ? {} : defaultVal : value}/>
      </Box>
    </ObjectInputDecoration>
  )
}

ObjectInput.propTypes = {
  ...ObjectFieldPropTypes
}
