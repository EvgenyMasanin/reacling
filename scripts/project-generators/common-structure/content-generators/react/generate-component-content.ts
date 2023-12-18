import { REACT_COMPONENT } from 'scripts/templates'
import { toCamelCase, capitalizeFirst } from 'scripts/utils/strings'

export const generateComponentContent = (name: string) =>
  REACT_COMPONENT(capitalizeFirst(toCamelCase(name)))
