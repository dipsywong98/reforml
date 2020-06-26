import React, { FunctionComponent } from 'react'
import { BaseComponentsContext, DefaultBaseComponents } from './BaseComponentsContext'
import { FieldComponentsContext } from './FieldComponentsContext'
import { FieldComponents } from '../types'
import PropTypes from 'prop-types'
import { DefaultFieldComponents } from './fields'
import { BaseComponents } from './base'

export interface ReformlProviderProps {
  fieldComponents?: Partial<FieldComponents>
  baseComponents?: Partial<BaseComponents>
  children: React.ReactNode
}

export const ReformlProvider: FunctionComponent<ReformlProviderProps> = ({ fieldComponents, baseComponents, children }) => {
  return <BaseComponentsContext.Provider value={{ ...DefaultBaseComponents, ...baseComponents }}>
    <FieldComponentsContext.Provider value={{ ...DefaultFieldComponents, ...fieldComponents }}>
      {children}
    </FieldComponentsContext.Provider>
  </BaseComponentsContext.Provider>
}

ReformlProvider.propTypes = {
  fieldComponents: PropTypes.object,
  baseComponents: PropTypes.object,
  children: PropTypes.node
}
