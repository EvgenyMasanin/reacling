import { mkdirSync } from 'fs'
import { join } from 'path'
import { Folders, INDEX, STORE_FOLDER_PATH } from 'scripts/constants'
import { createFile } from '../file-system'
import {
  storeContent,
  hooksIndexContent,
  rootReducerContent,
  useActionsContent
} from '../content-generators'
import { isDirExist } from '../predicates'
import { logger } from '../loggers/logger'

export const generateStore = () => {
  if (isDirExist(STORE_FOLDER_PATH)) {
    logger.addLog('error', 'Store already exist!')
    return
  }
  const HOOKS_FOLDER_PATH = join(STORE_FOLDER_PATH, Folders.hooks)
  const REDUCERS_FOLDER_PATH = join(STORE_FOLDER_PATH, Folders.reducers)

  mkdirSync(STORE_FOLDER_PATH)
  mkdirSync(HOOKS_FOLDER_PATH)
  mkdirSync(REDUCERS_FOLDER_PATH)

  createFile(STORE_FOLDER_PATH, 'store.ts', storeContent)
  createFile(REDUCERS_FOLDER_PATH, 'root-reducer.ts', rootReducerContent)
  createFile(HOOKS_FOLDER_PATH, INDEX, hooksIndexContent)
  createFile(HOOKS_FOLDER_PATH, 'useActions.ts', useActionsContent)
}
