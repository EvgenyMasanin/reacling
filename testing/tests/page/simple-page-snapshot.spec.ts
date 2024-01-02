import { mkdirSync } from 'fs'
import { join } from 'path'
import { Folder } from 'scripts/constants'
import { config } from 'scripts/services/config'
import { pageCommands } from 'testing/commands'
import { type Command } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'
import { removeDir } from 'utils/file-system'

describe('"simple" page snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput(join('simple', 'page'), commands)
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
