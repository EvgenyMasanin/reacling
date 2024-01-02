import { join } from 'path'

import { Folder } from 'scripts/constants'

import { type GenerateHook } from 'scripts/types'
import {
  appendToIndex,
  createFile,
  mkdirIfNotExist
} from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isFileExist } from 'scripts/utils/predicates'
import { toCamelCase } from 'scripts/utils/strings'
import { generateHookContent } from '../content-generators'

export const generateHook: GenerateHook = (hookName: string, path?: string) => {
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
