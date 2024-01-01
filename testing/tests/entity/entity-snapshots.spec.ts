import { entityCommands } from 'testing/commands'
import { type Command } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'
import { manageSrc } from 'testing/utils/manage-src'

describe('entity snapshots', () => {
  const equalConsoleEntityOutput = (commands: Command) => {
    equalConsoleOutput('entity', commands)
  }

  manageSrc()

  it('new entity', () => {
    equalConsoleEntityOutput(entityCommands[0])
  })

  it('entity already exist', () => {
    equalConsoleEntityOutput(entityCommands[1])
  })

  it('new component', () => {
    equalConsoleEntityOutput(entityCommands[2])
  })

  it('component already exist', () => {
    equalConsoleEntityOutput(entityCommands[3])
  })

  it('missing arguments', () => {
    equalConsoleEntityOutput(entityCommands[4])
  })

  it('missing component name', () => {
    equalConsoleEntityOutput(entityCommands[5])
  })

  it('entity is not exist', () => {
    equalConsoleEntityOutput(entityCommands[6])
  })
})
