export type ValueEventCallback<T> = (param: T | {target: {value: T}}) => unknown
