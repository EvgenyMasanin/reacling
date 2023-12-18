import { mkdirSync } from 'fs'
import { join } from 'path'
import { isDirExist } from '../predicates'
import { logger } from '../loggers'

export const mkdirIfNotExist = (root: string, dir: string) => {
  try {
    const path = join(root, dir)
    if (!isDirExist(path)) {
      mkdirSync(path)
      logger.addSuccessLog(`Folder created: ${path.match(/src.*/)[0]}.`)
    }
  } catch (error) {
    logger.addErrorLog(error)
  }
}
