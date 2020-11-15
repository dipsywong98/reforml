import { FormValue } from './FormValue'
import { Condition } from './Condition'

export type IfFieldType = string | ((value: FormValue) => boolean) | Condition
export type IfFieldKey = 'showIf'
