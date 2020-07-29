import React, { FunctionComponent } from 'react'
import { BaseComponentsContext, DefaultBaseComponents } from './BaseComponentsContext'
import { FieldComponentsContext } from './FieldComponentsContext'
import { FieldComponents, ValidateErrorFormatter } from '../types'
import PropTypes from 'prop-types'
import { DefaultFieldComponents } from './fields'
import { BaseComponents } from './base'
import { ValidatorDictionary } from '../types/Validator'
import { ValidatorDictionaryContext } from './ValidatorDictionaryContext'
import { defaultValidators } from '../utils/defaultValidators'
import { ValidateErrorFormatterContext } from './ValidatorErrorFormatterContext'
import { defaultValidateErrorFormatter } from '../utils/defaultValidateErrorFormatter'

export interface ReformlProviderProps {
  fieldComponents?: Partial<FieldComponents>
  baseComponents?: Partial<BaseComponents>
  validatorDictionary?: Partial<ValidatorDictionary>
  validateErrorFormatter?: ValidateErrorFormatter
  children: React.ReactNode
}

export const ReformlProvider: FunctionComponent<ReformlProviderProps> = ({ validateErrorFormatter, validatorDictionary, fieldComponents, baseComponents, children }) => {
  return (
    <ValidateErrorFormatterContext.Provider value={validateErrorFormatter ?? defaultValidateErrorFormatter}>
      <ValidatorDictionaryContext.Provider value={{ ...defaultValidators, ...validatorDictionary }}>
        <BaseComponentsContext.Provider value={{ ...DefaultBaseComponents, ...baseComponents }}>
          <FieldComponentsContext.Provider value={{ ...DefaultFieldComponents, ...fieldComponents }}>
            {children}
          </FieldComponentsContext.Provider>
        </BaseComponentsContext.Provider>
      </ValidatorDictionaryContext.Provider>
    </ValidateErrorFormatterContext.Provider>
  )
}

ReformlProvider.propTypes = {
  fieldComponents: PropTypes.object,
  baseComponents: PropTypes.object,
  validatorDictionary: PropTypes.object,
  validateErrorFormatter: PropTypes.func,
  children: PropTypes.node
}
