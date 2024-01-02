#!/usr/bin/env node

import { commonExecute } from './executors/common-execute'
import { yargsFsdExecute } from './executors/yargs-fsd-execute'
import {
  availableFsdCommands,
  type AvailableFsdCommands
} from './executors/yargs-fsd-execute/types'
import type { CommonCommand, FsdCommands, Methodology } from './types'
import { cli } from './utils/cli'
import { config } from './utils/config'
import { logger, writeHelp } from './utils/loggers'

// import { generateStore } from './utils/redux-generators'

const methodology: Record<
  Methodology,
  (command?: CommonCommand | FsdCommands) => void
> = {
  // fsd: fsdExecute,
  fsd: yargsFsdExecute,
  common: commonExecute
}

// start()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
// function start(): void {
//   const commandsNumber = process.argv.length - 2

//   if (commandsNumber === 0) {
//     writeHelp()
//     return
//   }

//   const command = process.argv[2] as CommonCommand

//   methodology[config.getMethodology()](command)

//   logger.writeLogs()
// }

function testStart() {
  if (process.argv[2] === '--help') {
    writeHelp()
    return
  }

  cli.yargs
    .wrap(100)
    .help('extended-help')
    .showHelpOnFail(false)
    .scriptName('reacling')
    .usage('Usage: $0 <command>')
    .middleware((props) => {
      const inputCommand = props._[0] as AvailableFsdCommands
      if (inputCommand && !availableFsdCommands.includes(inputCommand)) {
        logger.addUnknownCommandLog(inputCommand)
        throw new Error()
      }
    })

  methodology[config.methodology]()

  cli.yargs.parseSync()
  logger.writeLogs()
}

try {
  testStart()
} catch (error) {
  logger.writeLogs()
}
