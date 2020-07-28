import React, { FunctionComponent } from 'react'
import { BaseComponentsContext, DefaultBaseComponents } from './BaseComponentsContext'
import { FieldComponentsContext } from './FieldComponentsContext'
import { FieldComponents } from '../types'
import PropTypes from 'prop-types'
import { DefaultFieldComponents } from './fields'
import { BaseComponents } from './base'
import { ValidatorDictionary } from '../types/Validator'
import { ValidatorDictionaryContext } from './ValidatorDictionaryContext'
import { defaultValidators } from '../utils/defaultValidators'

export interface ReformlProviderProps {
  fieldComponents?: Partial<FieldComponents>
  baseComponents?: Partial<BaseComponents>
  validatorDictionary?: Partial<ValidatorDictionary>
  children: React.ReactNode
}

export const ReformlProvider: FunctionComponent<ReformlProviderProps> = ({ validatorDictionary, fieldComponents, baseComponents, children }) => {
  return (
    <ValidatorDictionaryContext.Provider value={{ ...defaultValidators, ...validatorDictionary }}>
      <BaseComponentsContext.Provider value={{ ...DefaultBaseComponents, ...baseComponents }}>
        <FieldComponentsContext.Provider value={{ ...DefaultFieldComponents, ...fieldComponents }}>
          {children}
        </FieldComponentsContext.Provider>
      </BaseComponentsContext.Provider>
    </ValidatorDictionaryContext.Provider>
  )
}

ReformlProvider.propTypes = {
  fieldComponents: PropTypes.object,
  baseComponents: PropTypes.object,
  validatorDictionary: PropTypes.object,
  children: PropTypes.node
}
