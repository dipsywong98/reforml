export const isDefined = (value: unknown): boolean => {
  return value !== '' && value !== undefined && ((Array.isArray(value) && value.length > 0) || (typeof value === 'object' && value !== null && Object.values(value).filter(isDefined).length > 0) || typeof value !== 'object')
}
