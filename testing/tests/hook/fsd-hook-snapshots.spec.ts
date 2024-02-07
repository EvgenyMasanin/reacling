import { join } from 'path'
import { Folder } from '@scripts/constants'
import { removeDir } from '@utils/file-system'
import { fsdHookCommands } from 'testing/commands'
import { Command } from 'testing/commands/types'
import { manageSrc } from 'testing/utils/manage-src'
import { execScript } from 'testing/utils/exec-script'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'

describe('fsd hook snapshots', () => {
  const equalConsoleHookOutput = (commands: Command) => {
    equalConsoleOutput('hook', commands)
  }

  beforeAll(() => {
    removeDir(Folder.src)
    execScript('init')
    execScript('e user')
  })

  afterAll(() => {
    removeDir(Folder.src)
  })

  it('new fsd hook', () => {
    equalConsoleHookOutput(fsdHookCommands[0])
  })

  it('fsd hook already exist', () => {
    equalConsoleHookOutput(fsdHookCommands[1])
  })

  it('fsd hook missing slice name', () => {
    equalConsoleHookOutput(fsdHookCommands[2])
  })

  it('fsd hook missing slice path', () => {
    equalConsoleHookOutput(fsdHookCommands[3])
  })

  it('fsd hook wrong layer name', () => {
    equalConsoleHookOutput(fsdHookCommands[4])
  })

  it('fsd hook missing arguments', () => {
    equalConsoleHookOutput(fsdHookCommands[5])
  })
})
