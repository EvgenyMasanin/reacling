/* eslint-disable @typescript-eslint/ban-types */
import { Folder } from 'scripts/constants'
import {
  entityComponentGenerator,
  entityGenerator
} from 'scripts/project-generators/fsd-structure/entity'
import {
  featureComponentGenerator,
  featureGenerator
} from 'scripts/project-generators/fsd-structure/feature'
import { initProject } from 'scripts/project-generators/fsd-structure/init-project'
import { pageGenerator } from 'scripts/project-generators/fsd-structure/page-generator'
import { shearedComponentGenerator } from 'scripts/project-generators/fsd-structure/sheared-component-generator'
import { widgetGenerator } from 'scripts/project-generators/fsd-structure/widget-generator'
import { fsdCommands, type FsdCommands } from 'scripts/types'
import { mkdirIfNotExist } from 'scripts/utils/file-system'
import { FSD_REACT_COMMANDS, logger, writeHelp } from 'scripts/utils/loggers'

const commandsMatcher: Record<FsdCommands, Function> = {
  init: initProject,
  e: entityGenerator,
  eu: entityComponentGenerator,
  f: featureGenerator,
  fu: featureComponentGenerator,
  p: pageGenerator,
  su: shearedComponentGenerator,
  w: widgetGenerator,
  '--help': writeHelp
}

const multipleParamCommands: FsdCommands[] = ['eu', 'fu']

export function fsdExecute(command: FsdCommands): void {
  mkdirIfNotExist('.', Folder.src)

  if (command !== '--help' && command !== 'init') {
    if (multipleParamCommands.includes(command) && !process.argv[4]) {
      logger.incorrectCommandLog()
      return
    } else if (!process.argv[3]) {
      logger.incorrectCommandLog()
      return
    }
  }

  if (!fsdCommands.includes(command)) {
    logger.addErrorLog(`Unknown command '${command}'`)
    logger.addCommonLog(FSD_REACT_COMMANDS)
    return
  }

  if (multipleParamCommands.includes(command)) {
    commandsMatcher[command](process.argv[3], process.argv[4])
    return
  }
  commandsMatcher[command](process.argv[3])
}
