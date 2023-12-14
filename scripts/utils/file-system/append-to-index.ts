import { join } from 'path'
import { INDEX, Status } from 'scripts/constants'
import { logger } from '../loggers'

import { appendFileSync } from 'fs'

export const appendToIndex = (path: string, fileName: string) => {
  const content = `export * from './${fileName}'\n`

  try {
    appendFileSync(join(path, INDEX), content)
    logger.addLog(
      Status.success,
      `File updated: ${join(path, INDEX).match(/src.*/)[0]}.`
    )
  } catch (error) {
    logger.addLog(Status.error, error)
  }
}
