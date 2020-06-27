import React from 'react'
import { ListFieldComponent } from '../../types/fields/list'
import { FieldDecoration } from './FieldDecoration'
import { getComponent } from '../../utils/getComponent'
import { useFieldComponents } from '../FieldComponentsContext'
import { MissingAttributeError } from '../../errors/MissingAttributeError'
import { FieldPropTypes } from '../../types/fields'
import { generalizeValueCallback } from '../../utils/generalizeValueCallback'

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
  defaultNewVal
}) => {
  if (of === undefined) {
    throw new MissingAttributeError('of', name, type)
  }
  if (defaultNewVal === undefined) {
    throw new MissingAttributeError('defaultNetVal', name, type)
  }
  const Components = useFieldComponents()
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
  return <FieldDecoration label={label} helperText={helperText}>
    {
      [...value, ''].map((v, index) => (
        index !== value.length
          ? (
            <div key={index}>
              <Component
                {...(typeof of !== 'string' ? of : {})}
                value={v}
                onChange={generalizeValueCallback(handleEdit(index))}
                disabled={!editable}
              />
              {deletable ? <button role='delete' onClick={handleDelete(index)}>Delete</button> : null}
            </div>
          )
          : (
            creatable ? <div key={index}>
              <Component
                {...(typeof of !== 'string' ? of : {})}
                role='new'
                value={defaultNewVal}
                onChange={generalizeValueCallback(handleCreate)}
              />
            </div> : null
          )
      ))
    }
  </FieldDecoration>
}

ListInput.propTypes = {
  ...FieldPropTypes
}
