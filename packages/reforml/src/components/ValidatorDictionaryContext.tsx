import { createContext, useContext } from 'react'
import { ValidatorDictionary } from '../types/Validator'

export const ValidatorDictionaryContext = createContext<ValidatorDictionary>({})
ValidatorDictionaryContext.displayName = 'ValidatorDictionaryContext'

export const useValidatorDictionary = (): ValidatorDictionary => useContext(ValidatorDictionaryContext)
