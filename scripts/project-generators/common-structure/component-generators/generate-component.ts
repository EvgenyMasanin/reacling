import { mkdirSync } from 'fs'
import { Folder } from 'scripts/constants'
import { type GenerateComponent } from 'scripts/types'

import {
  createComponentFiles,
  mkdirIfNotExist
} from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isDirExist } from 'scripts/utils/predicates'
import { generateDirectoryPath } from '../content-generators'

export const generateComponent: GenerateComponent = (componentName, path) => {
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
