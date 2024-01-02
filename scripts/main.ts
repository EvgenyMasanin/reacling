#!/usr/bin/env node
import { logger } from '../utils/loggers'
import { handleFail } from './errors'
import { fsdExecute } from './executors/fsd-execute'
import { simpleExecute } from './executors/simple-execute.ts/simple-execute'
import {
  allAvailableCommands,
  type AllAvailableCommands
} from './executors/types'
import { cli } from './services/cli'
import { config } from './services/config'

// import { generateStore } from './utils/redux-generators'

function start() {
  const methodology = {
    fsd: fsdExecute,
    common: simpleExecute
  }

  if (process.argv[2] === '--help') {
    logger.writeHelp(config.methodology)
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
        logger.addUnknownCommandLog(inputCommand)
        throw new Error()
      }
    })
    .fail(handleFail)

  methodology[config.methodology]()

  cli.yargs.parseSync()
  logger.writeLogs()
}

try {
  start()
} catch (error) {
  logger.writeLogs()
}
