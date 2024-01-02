import { pageCommands } from 'testing/commands'
import { type Command } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'
import { manageSrc } from 'testing/utils/manage-src'

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
