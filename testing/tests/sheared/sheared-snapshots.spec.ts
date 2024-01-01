import { shearedCommands } from 'testing/commands'
import { type Command } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'
import { manageSrc } from 'testing/utils/manage-src'

describe('sheared snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput('sheared', commands)
  }

  manageSrc()

  it('new sheared', () => {
    equalConsoleInitOutput(shearedCommands[0])
  })

  it('sheared already exist', () => {
    equalConsoleInitOutput(shearedCommands[1])
  })

  it('missing sheared name', () => {
    equalConsoleInitOutput(shearedCommands[2])
  })
})
