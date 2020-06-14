import * as React from 'react'

export * from './components/ReformlContext'
export { BaseForm } from './components/BaseForm'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props): React.ReactElement<Props> => {
  return <div>Example Component: {text}</div>
}
