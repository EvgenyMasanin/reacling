import { upFirst } from './up-first'

export const toCamelCase = (str: string) =>
  str
    .split('-')
    .map((word) => upFirst(word))
    .join('')
