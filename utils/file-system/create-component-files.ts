import { INDEX } from '@scripts/constants'
import {
  generateComponentContent,
  generateIndexContent
} from '@scripts/project-generators/simple-structure/content-generators'

import { createFile } from './create-file'

export const createComponentFiles = (
  directory: string,
  componentName: string
) => {
  createFile(
    directory,
    `${componentName}.tsx`,
    generateComponentContent(componentName)
  )

  createFile(directory, INDEX, generateIndexContent(componentName))
}
