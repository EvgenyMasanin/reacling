import { mkdirSync } from 'fs'
import {
  createComponentFiles,
  isDirExist,
  mkdirIfNotExist
} from '@utils/file-system'
import { logger } from '@utils/loggers'
import { Folder } from '@scripts/constants'

import { generateDirectoryPath } from '../content-generators'

export const generateComponent = (componentName: string, path: string) => {
  mkdirIfNotExist(Folder.src, Folder.components)

  const directoryPath = generateDirectoryPath(Folder.components, componentName)

  if (isDirExist(path ?? directoryPath)) {
    logger.pushAlreadyExistLog(componentName, 'component')
    return
  }

  try {
    mkdirSync(path ?? directoryPath)
    createComponentFiles(path ?? directoryPath, componentName)
  } catch (error) {
    logger.pushErrorLog(error)
  }
}
