export enum Comparison {
  EQ = '$eq',
  NEQ = '$neq',
  GT = '$gt',
  GTE = '$gte',
  LT = '$lt',
  LTE = '$lte',
  IN = '$in',
}

type Primitive = string | number | boolean | symbol
type Comparable = string | number

export interface Condition {
  [fieldName: string]: {
    [Comparison.EQ]?: Primitive
    [Comparison.NEQ]?: Primitive
    [Comparison.GT]?: Comparable
    [Comparison.GTE]?: Comparable
    [Comparison.LTE]?: Comparable
    [Comparison.LT]?: Comparable
    [Comparison.IN]?: Primitive[]
  }
}
