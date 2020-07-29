import { createContext, useContext } from 'react'
import { ValidatorDictionary } from '../types/Validator'
import { defaultValidators } from '../utils/defaultValidators'

export const ValidatorDictionaryContext = createContext<ValidatorDictionary>(defaultValidators)
ValidatorDictionaryContext.displayName = 'ValidatorDictionaryContext'

export const useValidatorDictionary = (): ValidatorDictionary => useContext(ValidatorDictionaryContext)
