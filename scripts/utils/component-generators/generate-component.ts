import {
  createComponentFiles,
  generateDirectoryPath,
  isDirExist,
  mkdirIfNotExist
} from '..'
import { mkdirSync } from 'fs'
import { Folders } from 'scripts/constants'
import { type GenerateComponent } from 'scripts/types'
import { logger } from '../loggers/logger'

export const generateComponent: GenerateComponent = (componentName, path) => {
  mkdirIfNotExist(Folders.src, Folders.components)

  const directoryPath = generateDirectoryPath(Folders.components, componentName)

  if (isDirExist(path ?? directoryPath)) {
    logger.addLog('error', `Component '${componentName}' is already exist!`)
    return
  }

  try {
    mkdirSync(path ?? directoryPath)
    createComponentFiles(path ?? directoryPath, componentName)
  } catch (error) {
    logger.addLog('error', error)
  }
}
