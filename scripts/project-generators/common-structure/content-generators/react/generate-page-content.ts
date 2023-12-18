import { PAGE } from 'scripts/templates'
import { toCamelCase, capitalizeFirst } from 'scripts/utils/strings'

export const generatePageContent = (name: string) =>
  PAGE(capitalizeFirst(toCamelCase(name)))
