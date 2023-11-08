import { join } from 'path'
import {
  generateHookContent,
  isFileExist,
  appendToIndex,
  createFile,
  mkdirIfNotExist
} from '..'
import { Folders } from 'scripts/constants'

import { type GenerateHook } from 'scripts/types'
import { logger } from '../loggers/logger'

export const generateHook: GenerateHook = (hookName: string, path?: string) => {
  mkdirIfNotExist(Folders.src, Folders.hooks)

  const directoryPath = join(Folders.src, Folders.hooks)

  if (isFileExist(directoryPath, `${hookName}.ts`)) {
    logger.addLog('error', `Hook '${hookName}' is already exist!`)
    return
  }

  const content = generateHookContent(hookName)

  createFile(path ?? directoryPath, `${hookName}.ts`, content)
  appendToIndex(path ?? directoryPath, hookName)
}
