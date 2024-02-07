import { cli } from '@services/cli'
import { logger } from '@utils/loggers'

import { missingArgumentError } from './errors'

export const handleFail = (messageOrCount: string | number) => {
  const command = cli.inputCommand
  const missingCommandsCount =
    typeof messageOrCount === 'string'
      ? +messageOrCount.match(/\d/)[0]
      : messageOrCount

  logger.pushErrorLog(missingArgumentError[command](missingCommandsCount))

  throw new Error()
}
