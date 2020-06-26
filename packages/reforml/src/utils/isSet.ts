export const isSet = <T> (set: Set<T> | unknown): set is Set<T> => {
  if (typeof set === 'object' && set !== null) {
    return 'add' in set && 'clear' in set && 'delete' in set && 'entries' in set && 'forEach' in set && 'has' in set && 'keys' in set
  } else {
    return false
  }
}
