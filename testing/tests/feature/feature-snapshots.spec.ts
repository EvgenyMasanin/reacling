import { featureCommands } from 'testing/commands'
import { type Command } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'
import { manageSrc } from 'testing/utils/manage-src'

describe('feature snapshots', () => {
  const equalConsoleFeatureOutput = (commands: Command) => {
    equalConsoleOutput('feature', commands)
  }

  manageSrc()

  it('new feature', () => {
    equalConsoleFeatureOutput(featureCommands[0])
  })

  it('feature already exist', () => {
    equalConsoleFeatureOutput(featureCommands[1])
  })

  it('new component', () => {
    equalConsoleFeatureOutput(featureCommands[2])
  })

  it('component already exist', () => {
    equalConsoleFeatureOutput(featureCommands[3])
  })

  it('missing arguments', () => {
    equalConsoleFeatureOutput(featureCommands[4])
  })

  it('missing component name', () => {
    equalConsoleFeatureOutput(featureCommands[5])
  })

  it('entity is not exist', () => {
    equalConsoleFeatureOutput(featureCommands[6])
  })
})
