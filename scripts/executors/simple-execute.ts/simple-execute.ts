import { Folder } from 'scripts/constants'
import { cli } from 'scripts/utils/cli'
import { mkdirIfNotExist } from 'scripts/utils/file-system'
import { commands } from './commands'
import { handleFail } from './errors'
import { type CommandConfig, type InputParameters } from './types'

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
  mkdirIfNotExist('.', Folder.src)

  cli.yargs.fail(handleFail)

  commands.forEach(addCommand)
}
