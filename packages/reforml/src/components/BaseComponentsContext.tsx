import { createContext, useContext } from 'react'
import * as DefaultBaseComponents from './base'
import { BaseComponents } from './base'

export const BaseComponentsContext = createContext<BaseComponents>(DefaultBaseComponents)
BaseComponentsContext.displayName = 'BaseComponentsContext'

export const useBaseComponents = (): BaseComponents => useContext(BaseComponentsContext)

export { DefaultBaseComponents }
