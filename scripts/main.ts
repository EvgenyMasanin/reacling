#!/usr/bin/env node
import boxen from 'boxen'
import { cli } from '@services/cli'
import { logger } from '@utils/loggers'
import { configService } from '@services/config'
import { dialogService } from '@services/dialog'
import { mkdirIfNotExist } from '@utils/file-system'
import { padding } from '@scripts/constants/index'

import chalk from 'chalk'

import { handleFail } from './errors'
import { Folder } from './constants'
import { allAvailableCommands } from './executors/types'
import { fsdExecute } from './executors/fsd-execute'
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
    .middleware((props) => {
      const inputCommand = props._[0] as AllAvailableCommands
      if (inputCommand && !allAvailableCommands.includes(inputCommand)) {
        logger.pushUnknownCommandLog(inputCommand)
        throw new Error()
      }
      if (inputCommand === 'config') return
      if (!inputCommand.length) return
      mkdirIfNotExist('.', Folder.src)
    })
    .fail(handleFail)
    .command({
      command: 'config',
      describe: 'Use to generate config.json',
      handler: async () => {
        console.log(
          chalk.blueBright(
            boxen('Generating config file...', { title: 'Reacling', padding })
          )
        )
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
  logger.writeLogs()
}
