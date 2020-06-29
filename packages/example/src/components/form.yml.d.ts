import { Fields } from 'reforml'

declare module '**/*.reforml.yaml' {
  const fields: Fields
  export default fields
}
