import { ListFieldComponent } from '../../types/fields/list'
import { FieldPropTypes } from '../../types/fields'
import { ListInputBuilder, ListInputComponent } from './ListInputBuilder'
import { MissingAttributeError } from '../../errors'
import { useBaseComponents } from '../BaseComponentsContext'
import { generalizeOptionalValueCallback } from '../../utils'
import React from 'react'
import { TextInput } from './TextInput'

const InputComponent: ListInputComponent<string> = ({
  value, type, name, editable = true, deletable = true, isCreating, onChange, onDelete, ...props
}) => {
  if (type === undefined) {
    throw new MissingAttributeError('of.type', name)
  }
  const { Flex, Box, Button } = useBaseComponents()
  return (
    <Flex className={isCreating ? 'list-input-create-box' : 'list-input-item-box'}>
      <Box className='flex1'>
        <TextInput
          {...props}
          value={value}
          onChange={generalizeOptionalValueCallback(onChange)}
        />
      </Box>
      <Box>
        {!isCreating && deletable ? <Button className='btn-danger' onClick={onDelete}>Delete</Button> : null}
      </Box>
    </Flex>
  )
}

InputComponent.propTypes = {
  ...FieldPropTypes
}

export const ListOfTextField: ListFieldComponent<string> = ListInputBuilder<string>({ InputComponent, defaultProps: { defaultNewVal: '', of: 'string' } })

ListOfTextField.propTypes = {
  ...FieldPropTypes
}
