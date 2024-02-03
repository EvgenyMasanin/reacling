import { REACT_COMPONENT } from '@scripts/templates'
import { capitalizeFirst, toCamelCase } from '@utils/strings'

export const generateComponentContent = (name: string) =>
  REACT_COMPONENT(capitalizeFirst(toCamelCase(name)))
