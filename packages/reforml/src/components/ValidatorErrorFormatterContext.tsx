import { createContext, useContext } from 'react'
import { ValidateErrorFormatter } from '../types'
import { defaultValidateErrorFormatter } from '../utils/defaultValidateErrorFormatter'

export const ValidateErrorFormatterContext = createContext<ValidateErrorFormatter>(defaultValidateErrorFormatter)
ValidateErrorFormatterContext.displayName = 'ValidateErrorFormatterContext'

export const useValidateErrorFormatter = (): ValidateErrorFormatter => useContext(ValidateErrorFormatterContext)
