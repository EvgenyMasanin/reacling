import { join } from 'path'
import { mkdirSync } from 'fs'

import { logger } from '../loggers'
import { isDirExist } from './is-dir-exist'

export const mkdirIfNotExist = (root: string, dir: string) => {
  try {
    const path = join(root, dir)
    if (!isDirExist(path)) {
      mkdirSync(path)
      logger.pushSuccessLog(`Folder created: ${path.match(/src.*/)[0]}.`)
    }
  } catch (error) {
    logger.pushErrorLog(error)
  }
}
