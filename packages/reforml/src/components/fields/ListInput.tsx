import React from 'react'
import { ListFieldComponent } from '../../types/fields/list'
import { getComponent } from '../../utils/getComponent'
import { useFieldComponents } from '../FieldComponentsContext'
import { MissingAttributeError } from '../../errors/MissingAttributeError'
import { FieldPropTypes } from '../../types/fields'
import { generalizeValueCallback } from '../../utils/generalizeValueCallback'
import { useBaseComponents } from '../BaseComponentsContext'

export const ListInput: ListFieldComponent<unknown[]> = ({
  onChange,
  deletable = true,
  creatable = true,
  editable = true,
  helperText,
  type,
  label,
  of,
  value = [],
  name,
  defaultNewVal,
  createLabel,
  placeholder
}) => {
  if (of === undefined) {
    throw new MissingAttributeError('of', name, type)
  }
  if (defaultNewVal === undefined) {
    throw new MissingAttributeError('defaultNetVal', name, type)
  }
  const Components = useFieldComponents()
  const { ListInputDecoration, Box, Button } = useBaseComponents()
  const Component = getComponent(Components, of, name)
  const handleEdit = (index: number) => (v: unknown) => {
    if (value !== undefined && editable) {
      value[index] = v
      onChange?.([...value])
    }
  }
  const handleDelete = (index: number) => () => {
    if (value !== undefined && deletable) {
      onChange?.(value.filter((_, k) => k !== index))
    }
  }
  const handleCreate = (v: unknown): void => {
    if (creatable) {
      if (value === undefined) {
        onChange?.([v])
      } else {
        value.push(v)
        onChange?.(value)
      }
    }
  }
  return <ListInputDecoration label={label} helperText={helperText}>
    {
      [...value, ''].map((v, index) => (
        index !== value.length
          ? (
            <Box className='list-input-item-box' key={index}>
              <Component
                {...(typeof of !== 'string' ? of : {})}
                value={v}
                onChange={generalizeValueCallback(handleEdit(index))}
                disabled={!editable}
              />
              {deletable ? <Button className='btn-danger' onClick={handleDelete(index)}>Delete</Button> : null}
            </Box>
          )
          : (
            creatable ? <Box className='list-input-create-box' key={index}>
              <Component
                {...(typeof of !== 'string' ? of : {})}
                label={createLabel}
                placeholder={placeholder}
                role='new'
                value={defaultNewVal}
                onChange={generalizeValueCallback(handleCreate)}
              />
            </Box> : null
          )
      ))
    }
  </ListInputDecoration>
}

ListInput.propTypes = {
  ...FieldPropTypes
}
