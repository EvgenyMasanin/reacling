import { pageCommands } from 'testing/commands'
import { manageSrc } from 'testing/utils/manage-src'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'

import type { Command } from 'testing/commands/types'
describe('"fsd" page snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput('page', commands)
  }
  manageSrc()

  it('new page', () => {
    equalConsoleInitOutput(pageCommands[0])
  })

  it('page already exist', () => {
    equalConsoleInitOutput(pageCommands[1])
  })

  it('missing page name', () => {
    equalConsoleInitOutput(pageCommands[2])
  })
})
