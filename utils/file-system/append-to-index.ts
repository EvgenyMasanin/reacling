import { join } from 'path'
import { appendFileSync } from 'fs'
import { INDEX } from '@scripts/constants'

import { logger } from '../loggers'

export const appendToIndex = (path: string, fileName: string) => {
  const content = `export * from './${fileName}'\n`

  try {
    appendFileSync(join(path, INDEX), content)
    logger.pushSuccessLog(
      `File updated: ${join(path, INDEX).match(/src.*/)[0]}.`
    )
  } catch (error) {
    logger.pushErrorLog(error)
  }
}
