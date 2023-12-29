/* eslint-disable @typescript-eslint/ban-types */
import { Folder } from 'scripts/constants'
import {
  generateComponent,
  generateFeature,
  generateFeatureComponent,
  generateFeatureHook,
  generateHook,
  generatePage
} from 'scripts/project-generators/common-structure/component-generators'

import type { CommonCommand } from 'scripts/types'
import { mkdirIfNotExist } from 'scripts/utils/file-system'
import { logger, writeHelp } from 'scripts/utils/loggers'
import { isCorrectCommandsNumber } from 'scripts/utils/predicates'

const commandsMatcher: Record<CommonCommand, Function> = {
  c: generateComponent,
  p: generatePage,
  h: generateHook,
  f: generateFeature,
  fc: generateFeatureComponent,
  fh: generateFeatureHook,
  store: null,
  '--help': writeHelp
}

export function commonExecute(command: CommonCommand): void {
  console.log('🚀 ~ commonExecute ~ command:', command)
  mkdirIfNotExist('.', Folder.src)

  if (command === 'fc' || command === 'fh') {
    if (isCorrectCommandsNumber(command)) {
      commandsMatcher[command](process.argv[3], process.argv[4])
      return
    }
    return
  }

  try {
    commandsMatcher[command](process.argv[3])
  } catch (error) {
    logger.addErrorLog(`Unknown command '${command}'`)
  }
}
