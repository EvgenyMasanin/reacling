import { mkdirSync } from 'fs'
import { Folders, Status } from 'scripts/constants'
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
    logger.addLog(
      Status.error,
      `Component '${componentName}' is already exist!`
    )
    return
  }

  try {
    mkdirSync(path ?? directoryPath)
    createComponentFiles(path ?? directoryPath, componentName)
  } catch (error) {
    logger.addLog(Status.error, error)
  }
}
