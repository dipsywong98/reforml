import { createContext, useContext } from 'react'
import { DefaultFieldComponents } from './fields'
import { FieldComponents } from '../types'

export const FieldComponentsContext = createContext<FieldComponents>(DefaultFieldComponents)
FieldComponentsContext.displayName = 'FieldComponentsContext'

export const useFieldComponents = (): FieldComponents => useContext(FieldComponentsContext)
