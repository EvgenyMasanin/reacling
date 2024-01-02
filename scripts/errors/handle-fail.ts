import { cli } from 'scripts/utils/cli'
import { logger } from 'scripts/utils/loggers'
import { missingArgumentError } from './errors'

export const handleFail = (message: string) => {
  const command = cli.inputCommand
  const missingCommandsCount = +message.match(/\d/)[0]
  logger.addErrorLog(missingArgumentError[command](missingCommandsCount))

  throw new Error()
}
