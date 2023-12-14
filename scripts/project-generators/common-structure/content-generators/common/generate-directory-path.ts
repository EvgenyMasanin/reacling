import { Folders } from 'scripts/constants'

export const generateDirectoryPath = (
  directory: Folders,
  componentName: string
) => `${Folders.src}/${directory}/${componentName}`
