import { logger } from './logger'

const commandMap = {
  fc: 'component',
  fh: 'hook'
}

export function writeFeatureError(command: 'fc' | 'fh') {
  logger.addErrorLog(
    `Please write 'feature name' then write '${commandMap[command]} name'!`
  )
}
