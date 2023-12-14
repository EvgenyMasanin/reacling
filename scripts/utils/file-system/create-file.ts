import { writeFileSync } from 'fs'
import { join } from 'path'
import { logger } from '../loggers'
import { Status } from 'scripts/constants'

export const createFile = (
  directory: string,
  fileName: string,
  content: string = ''
) => {
  try {
    const path = join(directory, fileName)
    writeFileSync(path, content)

    logger.addLog(Status.success, `File created: ${path.match(/src.*/)[0]}.`)
  } catch (error) {
    logger.addLog(Status.error, error)
  }
}
