import { join } from 'path'
import { INDEX } from 'scripts/constants'
import { logger } from '../loggers'

import { appendFileSync } from 'fs'

export const appendToIndex = (path: string, fileName: string) => {
  const content = `export * from './${fileName}'\n`

  try {
    appendFileSync(join(path, INDEX), content)
    logger.addSuccessLog(
      `File updated: ${join(path, INDEX).match(/src.*/)[0]}.`
    )
  } catch (error) {
    logger.addErrorLog(error)
  }
}
