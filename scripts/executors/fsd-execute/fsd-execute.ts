import { cli } from '@services/cli'
import { logger } from '@utils/loggers'
import { validateName } from '@utils/strings/validate-name'

import { commands } from './commands'
import {
  CommandConfig,
  FsdCommand,
  shortcutCommands,
  shortcutCommandsWithManyParams
} from '../types'

function addCommand({
  command,
  parameter,
  alias,
  describe,
  builder,
  handler
}: CommandConfig) {
  cli.yargs.command({
    command: parameter ? `${command} ${parameter}` : command,
    aliases: alias,
    describe,
    builder: (argv) => (builder ? builder(argv) : argv).help('help'),
    handler: ({ ...rest }) => {
      const args = parameter
        ?.replace(/[<>\[\]]/g, '')
        .split(' ')
        .map((param) => rest[param] as string)

      const [name, componentName] = args ?? []

      if (
        (!componentName && shortcutCommands.includes(command as FsdCommand)) ||
        shortcutCommandsWithManyParams.includes(command as FsdCommand)
      ) {
        return handler(name, componentName)
      }

      if (validateName(componentName)) return handler(name, componentName)

      if (!componentName && validateName(name))
        return handler(name, componentName)

      if (name)
        return logger.pushErrorLog(
          `Invalid argument "${componentName ? componentName : name}"! Please exclude "/" and "\\" characters.`,
          true
        )

      return handler()
    }
  })
}

export function fsdExecute(): void {
  commands.forEach(addCommand)
}
