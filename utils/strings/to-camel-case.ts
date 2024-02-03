import { capitalizeFirst } from './capitalize-first'

export const toCamelCase = (str: string) =>
  str
    .split('-')
    .map((word, i) => (i !== 0 ? capitalizeFirst(word) : word))
    .join('')
