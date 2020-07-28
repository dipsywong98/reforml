import { PartitionableObject, partitionObject } from './partitionObject'

export const partitionDecorationProps = (props: PartitionableObject): [PartitionableObject, PartitionableObject] =>
  partitionObject(props, ['label', 'helperText', 'errors', 'required'])
