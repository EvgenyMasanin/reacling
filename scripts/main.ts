#!/usr/bin/env node

import {
  generateHook,
  generatePage,
  generateFeature,
  generateComponent,
  generateFeatureHook,
  generateFeatureComponent
} from './project-generators/common-structure/component-generators'
import { Folders, Status } from './constants'
import { logger, writeHelp } from './utils/loggers'
import { type Command } from './types'
import { mkdirIfNotExist } from './utils/file-system'
import { isCorrectCommandsNumber } from './utils/predicates'
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
      logger.addLog(Status.error, `Unknown command '${command}'`)
    }
  }
}
