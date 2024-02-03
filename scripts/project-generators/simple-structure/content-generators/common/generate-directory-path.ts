import { Folder } from '@scripts/constants'

export const generateDirectoryPath = (
  directory: Folder,
  componentName: string
) => `${Folder.src}/${directory}/${componentName}`
