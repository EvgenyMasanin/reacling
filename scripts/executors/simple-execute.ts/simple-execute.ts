import { cli } from '@services/cli'

import { commands } from './commands'

import type { CommandConfig, InputParameters } from '../types'

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

export function simpleExecute(): void {
  commands.forEach(addCommand)
}
