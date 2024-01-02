import { join } from 'path'

import { Folder } from 'scripts/constants'

import { appendToIndex, createFile, isFileExist, mkdirIfNotExist } from 'utils/file-system'
import { logger } from 'utils/loggers'
import { toCamelCase } from 'utils/strings'
import { generateHookContent } from '../content-generators'

export const generateHook = (hookName: string, path?: string) => {
  mkdirIfNotExist(Folder.src, Folder.hooks)

  const directoryPath = join(Folder.src, Folder.hooks)

  if (isFileExist(directoryPath, `${hookName}.ts`)) {
    logger.addAlreadyExistLog(hookName, 'hook')
    return
  }

  const content = generateHookContent(toCamelCase(hookName))

  createFile(path ?? directoryPath, `${hookName}.ts`, content)
  appendToIndex(path ?? directoryPath, hookName)
}
