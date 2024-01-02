import { Folder } from 'scripts/constants'
import { cli } from 'scripts/services/cli'
import { mkdirIfNotExist } from 'utils/file-system'
import { type CommandConfig, type InputParameters } from '../types'
import { commands } from './commands'

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

export function fsdExecute(): void {
  mkdirIfNotExist('.', Folder.src)

  commands.forEach(addCommand)
}
