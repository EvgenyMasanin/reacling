import { mkdirSync } from 'fs'
import { join } from 'path'
import { Folder, INDEX, STORE_FOLDER_PATH } from 'scripts/constants'

import { REDUX_STORE, ROOT_REDUCER } from 'scripts/templates'
import { REDUX_HOOKS } from 'scripts/templates/redux-hooks.template'
import { USE_ACTIONS_HOOK } from 'scripts/templates/useActions-hook.template'
import { createFile, isDirExist } from 'utils/file-system'
import { logger } from 'utils/loggers'

export const generateStore = () => {
  if (isDirExist(STORE_FOLDER_PATH)) {
    logger.addAlreadyExistLog('Store')
    return
  }
  const HOOKS_FOLDER_PATH = join(STORE_FOLDER_PATH, Folder.hooks)
  const REDUCERS_FOLDER_PATH = join(STORE_FOLDER_PATH, Folder.reducers)

  mkdirSync(STORE_FOLDER_PATH)
  mkdirSync(HOOKS_FOLDER_PATH)
  mkdirSync(REDUCERS_FOLDER_PATH)

  createFile(STORE_FOLDER_PATH, 'store.ts', REDUX_STORE)
  createFile(REDUCERS_FOLDER_PATH, 'root-reducer.ts', ROOT_REDUCER)
  createFile(HOOKS_FOLDER_PATH, INDEX, REDUX_HOOKS)
  createFile(HOOKS_FOLDER_PATH, 'useActions.ts', USE_ACTIONS_HOOK)
}
