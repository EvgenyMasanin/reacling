#!/usr/bin/env node
/* eslint-disable @typescript-eslint/ban-types */

import {} from 'yarg'
import { commonExecute } from './executors/common-execute'
import { fsdExecute } from './executors/fsd-execute'
import { yargsFsdExecute } from './executors/yargs-fsd-execute'
import { availableCommands } from './executors/yargs-fsd-execute/types'
import type { CommonCommand, Methodology } from './types'
import { cli } from './utils/cli'
import { config } from './utils/config'
import { logger, writeHelp } from './utils/loggers'

// import { generateStore } from './utils/redux-generators'

const methodology: Record<Methodology, Function> = {
  fsd: fsdExecute,
  common: commonExecute
}

// start()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function start(): void {
  const commandsNumber = process.argv.length - 2

  if (commandsNumber === 0) {
    writeHelp()
    return
  }

  const command = process.argv[2] as CommonCommand

  methodology[config.getMethodology()](command)

  logger.writeLogs()
}
function testStart() {
  cli
    .help(false)
    .showHelpOnFail(false)
    .scriptName('reacling')
    .wrap(100)
    .middleware(() => {
      if (cli.inputCommand && !availableCommands.includes(cli.inputCommand)) {
        logger.addUnknownCommandLog(cli.inputCommand)
        throw new Error()
      }
    })

  yargsFsdExecute()

  cli.parseSync()
  logger.writeLogs()
}

try {
  testStart()
} catch (error) {
  logger.writeLogs()
}
