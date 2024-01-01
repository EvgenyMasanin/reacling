/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
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
import { type FsdCommands } from 'scripts/types'
import { cli } from 'scripts/utils/cli'
import { mkdirIfNotExist } from 'scripts/utils/file-system'
import { logger, writeHelp } from 'scripts/utils/loggers'
import { commands } from './commands'
import { missingArgumentError } from './errors'
import { type CommandConfig, type InputParameters } from './types'

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

function addCommand({
  command,
  parameter,
  alias,
  describe,
  handler
}: CommandConfig) {
  cli.yargs.command<InputParameters>({
    command: parameter ? `${command} ${parameter}` : command,
    aliases: alias,
    describe,
    handler: ({ name, componentName }) => {
      handler(name, componentName)
    }
  })
  return addCommand
}

export function yargsFsdExecute(): void {
  mkdirIfNotExist('.', Folder.src)

  cli.yargs.fail((message, err, argv) => {
    const command = cli.inputCommand
    const missingCommandsCount = +message.match(/\d/)[0]
    logger.addErrorLog(missingArgumentError[command](missingCommandsCount))

    throw new Error()
  })

  commands.forEach(addCommand)

  // cli.yargs.command({
  //   command: 't <p>',
  //   builder: (argv) => {
  //     argv.positional('p', {
  //       demandOption: true
  //     })
  //     return argv
  //   },
  //   aliases: '',
  //   describe: '',
  //   handler: () => {
  //     logger.addCommonLog('qwerty')
  //   }
  // })

  //   if (command !== '--help' && command !== 'init') {
  //     if (multipleParamCommands.includes(command) && !process.argv[4]) {
  //       logger.incorrectCommand()
  //       return
  //     } else if (!process.argv[3]) {
  //       logger.incorrectCommand()
  //       return
  //     }
  //   }

  //   if (!fsdCommands.includes(command)) {
  //     logger.addErrorLog(`Unknown command '${command}'`)
  //     logger.addCommonLog(FSD_REACT_COMMANDS)
  //     return
  //   }

  //   if (multipleParamCommands.includes(command)) {
  //     commandsMatcher[command](process.argv[3], process.argv[4])
  //     return
  //   }
  //   commandsMatcher[command](process.argv[3])
}
