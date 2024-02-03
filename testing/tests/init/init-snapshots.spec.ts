import { mkdirSync } from 'fs'
import { Folder } from '@scripts/constants'
import { initCommands } from 'testing/commands'
import { removeDir } from '@utils/file-system'
import { type Command, type } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'

describe('init snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput('init', commands)
  }

  afterEach(() => {
    removeDir(Folder.src)
  })

  it('init', () => {
    equalConsoleInitOutput(initCommands[0])
  })
  it('if "src" empty', () => {
    mkdirSync(Folder.src)
    equalConsoleInitOutput(initCommands[1])
  })
})
