import React, { FunctionComponent } from 'react'
import { ListFieldComponent } from '../../types/fields/list'
import { MissingAttributeError } from '../../errors/MissingAttributeError'
import { CommonFieldComponentProps, Field, FieldPropTypes } from '../../types/fields'
import { generalizeValueCallback } from '../../utils/generalizeValueCallback'
import { useBaseComponents } from '../BaseComponentsContext'
import { useFieldComponents } from '../FieldComponentsContext'
import { getComponent } from '../../utils'
import { partitionDecorationProps } from '../../utils/partitionDecorationProps'
import { FieldDecorationComponent } from '../base/FieldDecoration'
import { FieldValidateError } from '../../types/ValidateErrors'

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

export type ListDecorationComponent = FieldDecorationComponent

export interface ListInputBuilderOptions<T> {
  InputComponent?: ListInputComponent<T>
  DecorationComponent?: ListDecorationComponent
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

const DefaultDecorationComponent: ListDecorationComponent = (props) => {
  const { ListInputDecoration } = useBaseComponents()
  return <ListInputDecoration {...props} />
}

export function ListInputBuilder <T> ({
  InputComponent = DefaultInputComponent as ListInputComponent<T>,
  DecorationComponent = DefaultDecorationComponent,
  defaultProps
}: ListInputBuilderOptions<T> = {}): ListFieldComponent<T> {
  const ListInput: ListFieldComponent<T> = (props) => {
    const {
      onChange,
      deletable = true,
      creatable = true,
      editable = true,
      of,
      value = [],
      name,
      defaultNewVal,
      createLabel,
      placeholder,
      inlineDelete,
      errors
    } = props

    let subErrors: FieldValidateError[] = value.map(() => undefined)
    let rootErrors: FieldValidateError
    if (errors !== undefined && errors !== null) {
      const nestedErrors = errors?.filter(e => Array.isArray(e))
      if (nestedErrors.length > 0 && Array.isArray(nestedErrors[0]) && nestedErrors[0] !== undefined) {
        subErrors = nestedErrors[0]
      }
      rootErrors = errors?.filter(e => typeof e === 'string')
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
    const [decorationProps] = partitionDecorationProps(props)
    return <DecorationComponent {...decorationProps} errors={rootErrors}>
      {
        [...value, defaultNewVal].map((v: T|undefined, index) => (
          index !== value.length
            ? (
              <InputComponent
                key={index}
                name={name}
                type={typeof of === 'string' ? of : undefined}
                {...(typeof of !== 'string' ? of : {})}
                of={of as unknown as Field<unknown>|string}
                value={v}
                onChange={generalizeValueCallback(handleEdit(index))}
                disabled={!editable}
                deletable={deletable}
                editable={editable}
                onDelete={handleDelete(index)}
                isCreating={false}
                inlineDelete={inlineDelete}
                errors={subErrors[index]}
              />
            )
            : (
              creatable ? (
                <InputComponent
                  key={index}
                  name={name}
                  type={typeof of === 'string' ? of : undefined}
                  {...(typeof of !== 'string' ? of : {})}
                  of={of as unknown as Field<unknown>|string}
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
