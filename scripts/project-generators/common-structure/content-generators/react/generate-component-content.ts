import { REACT_COMPONENT } from 'scripts/templates'
import { toCamelCase } from 'scripts/utils/strings'

export const generateComponentContent = (name: string) =>
  REACT_COMPONENT(toCamelCase(name))
