import { mkdirSync } from 'fs'
import { Folder } from 'scripts/constants'

import { createComponentFiles, isDirExist, mkdirIfNotExist } from 'utils/file-system'
import { logger } from 'utils/loggers'
import { generateDirectoryPath } from '../content-generators'

export const generateComponent = (componentName: string, path: string) => {
  mkdirIfNotExist(Folder.src, Folder.components)

  const directoryPath = generateDirectoryPath(Folder.components, componentName)

  if (isDirExist(path ?? directoryPath)) {
    logger.addAlreadyExistLog(componentName, 'component')
    return
  }

  try {
    mkdirSync(path ?? directoryPath)
    createComponentFiles(path ?? directoryPath, componentName)
  } catch (error) {
    logger.addErrorLog(error)
  }
}
