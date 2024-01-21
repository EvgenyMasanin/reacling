import { sharedCommands } from 'testing/commands'
import { type Command } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'

import { manageSrc } from 'testing/utils/manage-src'
describe('shared snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput('shared', commands)
  }

  manageSrc()

  it('new shared', () => {
    equalConsoleInitOutput(sharedCommands[0])
  })

  it('shared already exist', () => {
    equalConsoleInitOutput(sharedCommands[1])
  })

  it('missing shared name', () => {
    equalConsoleInitOutput(sharedCommands[2])
  })
})
