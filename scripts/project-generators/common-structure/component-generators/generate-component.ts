import { mkdirSync } from 'fs'
import { Folders } from 'scripts/constants'
import { type GenerateComponent } from 'scripts/types'

import { generateDirectoryPath } from '../content-generators'
import {
  mkdirIfNotExist,
  createComponentFiles
} from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isDirExist } from 'scripts/utils/predicates'

export const generateComponent: GenerateComponent = (componentName, path) => {
  mkdirIfNotExist(Folders.src, Folders.components)

  const directoryPath = generateDirectoryPath(Folders.components, componentName)

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
