import { ListFieldComponent } from '../../types/fields/list'
import { FieldPropTypes } from '../../types/fields'
import { ListInputBuilder } from './ListInputBuilder'

export const ListInput: ListFieldComponent<unknown> = ListInputBuilder<unknown>()

ListInput.propTypes = {
  ...FieldPropTypes
}
