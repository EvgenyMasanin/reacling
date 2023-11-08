import { INDEX } from 'scripts/constants'
import { createFile, generateComponentContent, generateIndexContent } from '..'

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
