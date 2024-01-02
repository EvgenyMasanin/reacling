import { writeFileSync } from 'fs'
import { join } from 'path'
import { logger } from '../loggers'

export const createFile = (
  directory: string,
  fileName: string,
  content: string = ''
) => {
  try {
    const path = join(directory, fileName)
    writeFileSync(path, content)

    logger.addSuccessLog(`File created: ${path.match(/src.*/)[0]}.`)
  } catch (error) {
    logger.addErrorLog(error)
  }
}
