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
    handler: ({ ...rest }) => {
      const args = parameter
        ?.replace(/[<>\[\]]/g, '')
        .split(' ')
        .map((param) => rest[param] as string)

      handler(args?.[0], args?.[1])
    }
  })
}

export function fsdExecute(): void {
  commands.forEach(addCommand)
}
