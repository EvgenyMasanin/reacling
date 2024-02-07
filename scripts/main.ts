#!/usr/bin/env node
import { cli } from '@services/cli'
import { logger } from '@utils/loggers'
import { configService } from '@services/config'
import { dialogService } from '@services/dialog'
import { mkdirIfNotExist } from '@utils/file-system'

import { handleFail } from './errors'
import { Folder } from './constants'
import { allAvailableCommands } from './executors/types'
import { fsdExecute } from './executors/fsd-execute'
import { CONTROLLABLE_EXIT, UNKNOWN_COMMAND } from './errors/errors'
import { simpleExecute } from './executors/simple-execute.ts/simple-execute'

import type { AllAvailableCommands } from './executors/types'
// import { generateStore } from './utils/redux-generators'

function start() {
  const methodology = {
    fsd: fsdExecute,
    simple: simpleExecute
  }

  if (process.argv[2] === '--help') {
    logger.writeHelp(configService.methodology)
    return
  }

  cli.yargs
    .wrap(100)
    .help('extended-help')
    .showHelpOnFail(false)
    .scriptName('reacling')
    .usage('Usage: $0 <command>')
    .middleware((args) => {
      const inputCommand = args._[0] as AllAvailableCommands
      if (inputCommand && !allAvailableCommands.includes(inputCommand)) {
        logger.pushUnknownCommandLog(inputCommand)
        throw new Error(UNKNOWN_COMMAND)
      }
      if (inputCommand === 'config') return
      if (!inputCommand) {
        cli.yargs.showHelp()
        return
      }
      mkdirIfNotExist('.', Folder.src)
    })
    .fail(handleFail)
    .command({
      builder: (argv) => argv.help('help'),
      command: 'config',
      describe: 'Use to generate config.json',
      handler: async () => {
        logger.writeStartConfigGenerating()

        configService.overwriteUserConfig(
          await dialogService.askAboutConfiguration()
        )
        logger.pushSuccessLog('Config file has been generated!')
      }
    })

  methodology[configService.methodology]()

  cli.yargs
    .parseAsync()
    .then(() => {
      logger.writeLogs()
    })
    .catch(() => {})
}

try {
  start()
} catch (error) {
  if (
    error?.message !== CONTROLLABLE_EXIT &&
    error?.message !== UNKNOWN_COMMAND
  ) {
    console.log(
      `🚀 ~ Error:`,
      'Please open an issue on github or send error stack to my email: gmasmin@gmail.com',
      error
    )
  }
  logger.writeLogs()
}
