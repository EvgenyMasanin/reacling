import { widgetCommands } from 'testing/commands'
import { type Command } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'
import { manageSrc } from 'testing/utils/manage-src'

describe('widget snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput('widget', commands)
  }

  manageSrc()

  it('new widget', () => {
    equalConsoleInitOutput(widgetCommands[0])
  })

  it('widget already exist', () => {
    equalConsoleInitOutput(widgetCommands[1])
  })

  it('missing widget name', () => {
    equalConsoleInitOutput(widgetCommands[2])
  })
})
