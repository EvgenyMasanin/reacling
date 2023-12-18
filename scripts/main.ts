#!/usr/bin/env node
/* eslint-disable @typescript-eslint/ban-types */

import { commonExecute } from './executors/common-execute'
import { fsdExecute } from './executors/fsd-execute'
import type { CommonCommand, Methodology } from './types'
import { config } from './utils/config'
import { logger, writeHelp } from './utils/loggers'
// import { generateStore } from './utils/redux-generators'

const methodology: Record<Methodology, Function> = {
  fsd: fsdExecute,
  common: commonExecute
}

start()

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
