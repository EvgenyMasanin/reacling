#!/usr/bin/env node

import 'module-alias/register'

import {
  writeHelp,
  generateHook,
  generatePage,
  generateFeature,
  generateComponent,
  generateFeatureHook,
  generateFeatureComponent
} from './utils/component-generators'
import { isCorrectCommandsNumber, mkdirIfNotExist } from './utils'
import { Folders } from './constants'
import { logger } from './utils/loggers/logger'
import { type Command } from './types'
// import { generateStore } from './utils/redux-generators'

start()

function start(): void {
  const commandsNumber = process.argv.length - 2

  if (commandsNumber === 0) {
    writeHelp()
    return
  }

  const command = process.argv[2] as Command

  mkdirIfNotExist('.', Folders.src)

  execute(command)

  logger.writeLogs()
}

function execute(command: Command): void {
  switch (command) {
    case 'c': {
      generateComponent(process.argv[3])
      return
    }
    case 'p': {
      generatePage(process.argv[3])
      return
    }
    case 'f': {
      generateFeature(process.argv[3])
      return
    }
    case 'h': {
      generateHook(process.argv[3])
      return
    }
    case 'fc': {
      isCorrectCommandsNumber('fc') &&
        generateFeatureComponent(process.argv[3], process.argv[4])
      return
    }
    case 'fh': {
      isCorrectCommandsNumber('fh') &&
        generateFeatureHook(process.argv[3], process.argv[4])
      return
    }
    // case 'store':
    //   return generateStore()
    case '--help': {
      writeHelp()
      return
    }
    default: {
      logger.addLog('error', `Unknown command '${command}'`)
    }
  }
}
