import { mkdirSync } from 'fs'
import { join } from 'path'
import { Folders, INDEX, STORE_FOLDER_PATH, Status } from 'scripts/constants'

import { createFile, isDirExist } from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { REDUX_HOOKS } from 'scripts/templates/redux-hooks.template'
import { REDUX_STORE, ROOT_REDUCER } from 'scripts/templates'
import { USE_ACTIONS_HOOK } from 'scripts/templates/useActions-hook.template'

export const generateStore = () => {
  if (isDirExist(STORE_FOLDER_PATH)) {
    logger.addLog(Status.error, 'Store already exist!')
    return
  }
  const HOOKS_FOLDER_PATH = join(STORE_FOLDER_PATH, Folders.hooks)
  const REDUCERS_FOLDER_PATH = join(STORE_FOLDER_PATH, Folders.reducers)

  mkdirSync(STORE_FOLDER_PATH)
  mkdirSync(HOOKS_FOLDER_PATH)
  mkdirSync(REDUCERS_FOLDER_PATH)

  createFile(STORE_FOLDER_PATH, 'store.ts', REDUX_STORE)
  createFile(REDUCERS_FOLDER_PATH, 'root-reducer.ts', ROOT_REDUCER)
  createFile(HOOKS_FOLDER_PATH, INDEX, REDUX_HOOKS)
  createFile(HOOKS_FOLDER_PATH, 'useActions.ts', USE_ACTIONS_HOOK)
}
