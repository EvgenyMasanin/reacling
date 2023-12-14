import { join } from 'path'

import { Folders, Status } from 'scripts/constants'

import { type GenerateHook } from 'scripts/types'
import {
  appendToIndex,
  createFile,
  mkdirIfNotExist
} from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isFileExist } from 'scripts/utils/predicates'
import { generateHookContent } from '../content-generators'

export const generateHook: GenerateHook = (hookName: string, path?: string) => {
  mkdirIfNotExist(Folders.src, Folders.hooks)

  const directoryPath = join(Folders.src, Folders.hooks)

  if (isFileExist(directoryPath, `${hookName}.ts`)) {
    logger.addLog(Status.error, `Hook '${hookName}' is already exist!`)
    return
  }

  const content = generateHookContent(hookName)

  createFile(path ?? directoryPath, `${hookName}.ts`, content)
  appendToIndex(path ?? directoryPath, hookName)
}
