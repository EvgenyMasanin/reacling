import { INDEX } from 'scripts/constants'
import { createFile } from './create-file'
import { generateComponentContent, generateIndexContent } from 'scripts/project-generators/common-structure/content-generators'

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
