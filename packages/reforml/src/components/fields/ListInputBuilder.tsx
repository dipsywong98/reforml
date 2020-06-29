import React, { FunctionComponent } from 'react'
import { ListFieldComponent } from '../../types/fields/list'
import { MissingAttributeError } from '../../errors/MissingAttributeError'
import { CommonFieldComponentProps, Field, FieldPropTypes } from '../../types/fields'
import { generalizeValueCallback } from '../../utils/generalizeValueCallback'
import { useBaseComponents } from '../BaseComponentsContext'
import { useFieldComponents } from '../FieldComponentsContext'
import { getComponent } from '../../utils'

export type ListInputComponentProps<T> = CommonFieldComponentProps<T> & Field<T> & {
  onDelete?: () => unknown
  deletable?: boolean
  editable?: boolean
  isCreating: boolean
  placeholder?: string
  listName?: string
  inlineDelete?: boolean
  of?: string | Field<unknown>
}

export type ListInputComponent<T> = FunctionComponent<ListInputComponentProps<T>>

export type ListDecorationComponentProps<T > = Field<T>

export type ListDecorationComponent<T> = FunctionComponent<ListDecorationComponentProps<T>>

export interface ListInputBuilderOptions<T> {
  InputComponent?: ListInputComponent<T>
  DecorationComponent?: ListDecorationComponent<T>
  defaultProps?: Record<string, unknown>
}

const DefaultInputComponent: ListInputComponent<unknown> = ({
  of, inlineDelete, listName, value, type, name, editable = true, deletable = true, isCreating, onChange, onDelete, ...props
}) => {
  if (type === undefined) {
    throw new MissingAttributeError('of.type', name === undefined ? listName : name)
  }
  const Components = useFieldComponents()
  const { Box, Button } = useBaseComponents()
  const Component = getComponent(Components, type, name)
  return (
    <Box className={isCreating ? 'list-input-create-box' : 'list-input-item-box'}>
      <Box className={inlineDelete === true ? 'flex' : ''}>
        <Box className='flex1'>
          <Component
            {...props}
            {...(typeof of === 'string' ? {} : of)}
            value={value}
            onChange={onChange !== undefined ? generalizeValueCallback(onChange) : undefined}
          />
        </Box>
        <Box>
          {!isCreating && deletable ? <Button className='btn-danger' onClick={onDelete}>Delete</Button> : null}
        </Box>
      </Box>
    </Box>
  )
}

DefaultInputComponent.propTypes = {
  ...FieldPropTypes
}

const DefaultDecorationComponent: ListDecorationComponent<unknown> = (props) => {
  const { ListInputDecoration } = useBaseComponents()
  return <ListInputDecoration {...props} />
}

export function ListInputBuilder <T> ({
  InputComponent = DefaultInputComponent as ListInputComponent<T>,
  DecorationComponent = DefaultDecorationComponent as ListDecorationComponent<T>,
  defaultProps
}: ListInputBuilderOptions<T> = {}): ListFieldComponent<T> {
  const ListInput: ListFieldComponent<T> = (props) => {
    const {
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
      placeholder,
      inlineDelete
    } = props
    if (defaultNewVal === undefined) {
      throw new MissingAttributeError('defaultNewVal', name, type)
    }
    const handleEdit = (index: number) => (v: T) => {
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
    const handleCreate = (v: T): void => {
      if (creatable) {
        if (value === undefined) {
          onChange?.([v])
        } else {
          value.push(v)
          onChange?.(value)
        }
      }
    }
    return <DecorationComponent label={label} helperText={helperText}>
      {
        [...value, defaultNewVal].map((v: T, index) => (
          index !== value.length
            ? (
              <InputComponent
                key={index}
                name={name}
                type={typeof of === 'string' ? of : undefined}
                {...(typeof of !== 'string' ? of : {})}
                of={of}
                value={v}
                onChange={generalizeValueCallback(handleEdit(index))}
                disabled={!editable}
                deletable={deletable}
                editable={editable}
                onDelete={handleDelete(index)}
                isCreating={false}
                inlineDelete={inlineDelete}
              />
            )
            : (
              creatable ? (
                <InputComponent
                  key={index}
                  name={name}
                  type={typeof of === 'string' ? of : undefined}
                  {...(typeof of !== 'string' ? of : {})}
                  of={of}
                  label={createLabel}
                  placeholder={placeholder}
                  value={v}
                  onChange={generalizeValueCallback(handleCreate)}
                  isCreating={true}
                  inlineDelete={inlineDelete}
                />)
                : null
            )
        ))
      }
    </DecorationComponent>
  }

  ListInput.propTypes = {
    ...FieldPropTypes
  }

  ListInput.defaultProps = defaultProps

  return ListInput
}
