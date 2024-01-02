import { mkdirSync } from 'fs'
import { join } from 'path'
import { Folder } from 'scripts/constants'
import { config } from 'scripts/services/config'
import { componentCommands } from 'testing/commands/component'
import { type Command } from 'testing/commands/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'
import { removeDir } from 'utils/file-system'

describe('component snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput(join('simple', 'component'), commands)
  }

  beforeAll(() => {
    removeDir(Folder.src)
    mkdirSync(Folder.src)
    config.changeMethodology('common')
  })

  afterAll(() => {
    config.changeMethodology('fsd')
    removeDir(Folder.src)
  })

  it('new component', () => {
    equalConsoleInitOutput(componentCommands[0])
  })

  it('component already exist', () => {
    equalConsoleInitOutput(componentCommands[1])
  })

  it('missing component name', () => {
    equalConsoleInitOutput(componentCommands[2])
  })
})
