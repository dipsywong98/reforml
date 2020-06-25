import { ChangeEvent } from 'react'

export type ValueCallback<T> = (param: T|ChangeEvent) => unknown
