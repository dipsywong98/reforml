import { createContext, useContext } from 'react'
import { DefaultComponents } from './fields/DefaultComponents'
import { FieldComponent, FieldComponents } from '../types'

export interface ReformlContextInterface<T = { [type: string]: FieldComponent<unknown> }> {
  components: FieldComponents<T>
}

const ReformlContext = createContext<ReformlContextInterface>({ components: DefaultComponents })
ReformlContext.displayName = 'ReformlContext'

export const ReformlProvider = ReformlContext.Provider

export const useComponents = (): FieldComponents => useContext(ReformlContext).components
