import { PAGE } from 'scripts/templates'
import { toCamelCase } from 'scripts/utils/strings'

export const generatePageContent = (name: string) => PAGE(toCamelCase(name))
