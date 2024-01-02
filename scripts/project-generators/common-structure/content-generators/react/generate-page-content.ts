import { PAGE } from 'scripts/templates'
import { capitalizeFirst, toCamelCase } from 'utils/strings'

export const generatePageContent = (name: string) =>
  PAGE(capitalizeFirst(toCamelCase(name)))
