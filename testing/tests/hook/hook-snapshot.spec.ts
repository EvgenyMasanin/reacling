import { mkdirSync } from 'fs'
import { join } from 'path'
import { Folder } from 'scripts/constants'
import { config } from 'scripts/services/config'
import { hookCommands } from 'testing/commands/hook'
import { type Command } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'
import { removeDir } from 'utils/file-system'

describe('hook snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput(join('simple', 'hook'), commands)
  }

  beforeAll(() => {
    removeDir(Folder.src)
    mkdirSync(Folder.src)
    config.changeMethodology('common')
  })

  afterAll(() => {
    removeDir(Folder.src)
    config.changeMethodology('fsd')
  })

  it('new hook', () => {
    equalConsoleInitOutput(hookCommands[0])
  })

  it('hook already exist', () => {
    equalConsoleInitOutput(hookCommands[1])
  })

  it('missing hook name', () => {
    equalConsoleInitOutput(hookCommands[2])
  })
})
