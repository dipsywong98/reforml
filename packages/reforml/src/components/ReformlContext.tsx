import { createContext, useContext } from 'react'
import { DefaultComponents } from './fields/DefaultComponents'
import { FieldComponents } from '../type'

export interface ReformlContextInterface {
  components: FieldComponents
}

const ReformlContext = createContext<ReformlContextInterface>({ components: DefaultComponents })
ReformlContext.displayName = 'ReformlContext'

export const ReformlProvider = ReformlContext.Provider

export const useComponents = (): FieldComponents => useContext(ReformlContext).components
