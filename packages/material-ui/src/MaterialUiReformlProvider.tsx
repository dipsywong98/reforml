import React, { FunctionComponent } from 'react'
import { FieldComponent, ReformlProvider, ReformlProviderProps } from 'reforml'
import { BaseSelect } from './base/BaseSelect'
import { MaterialTextInput } from './fields/MaterialTextInput'
import { MaterialNumberInput } from './fields/MaterialNumberInput'
import { MaterialSelect } from './fields/MaterialSelect'
import { Checkbox } from '@material-ui/core'
import { BaseButton } from './base/BaseButton'

export const MaterialBaseComponents = {
  BaseSelect,
  BaseCheckbox: Checkbox,
  Button: BaseButton
}

export const MaterialFieldComponents = {
  text: MaterialTextInput as FieldComponent<string>,
  Text: MaterialTextInput as FieldComponent<string>,
  select: MaterialSelect,
  number: MaterialNumberInput as FieldComponent<number>
}

const MaterialUiReformlProvider: FunctionComponent<ReformlProviderProps> = ({ children, ...props }) => {
  return <ReformlProvider
    validatorDictionary={props.validatorDictionary}
    baseComponents={{ ...MaterialBaseComponents }}
    fieldComponents={{ ...MaterialFieldComponents }}>
    {children}
  </ReformlProvider>
}

MaterialUiReformlProvider.propTypes = ReformlProvider.propTypes
