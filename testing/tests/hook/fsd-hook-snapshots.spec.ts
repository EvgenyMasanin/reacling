import { join } from 'path'
import { Command } from 'testing/commands/types'
import { hookCommands } from 'testing/commands/hook'
import { manageSrc } from 'testing/utils/manage-src'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'

describe('fsd hook snapshots', () => {
  const equalConsoleHookOutput = (commands: Command) => {
    equalConsoleOutput(join('simple', 'hook'), commands)
  }

  manageSrc()

  it('new fsd hook', () => {
    equalConsoleHookOutput(hookCommands[3])
  })

  it('fsd hook already exist', () => {
    equalConsoleHookOutput(hookCommands[4])
  })

  it('fsd hook missing slice name', () => {
    equalConsoleHookOutput(hookCommands[5])
  })

  it('fsd hook missing slice path', () => {
    equalConsoleHookOutput(hookCommands[6])
  })

  it('fsd hook wrong layer name', () => {
    equalConsoleHookOutput(hookCommands[7])
  })

  it('fsd hook missing arguments', () => {
    equalConsoleHookOutput(hookCommands[8])
  })
})
