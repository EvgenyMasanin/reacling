import { join } from 'path'
import { mkdirSync } from 'fs'
import { Folder } from '@scripts/constants'
import { removeDir } from '@utils/file-system'
import { configService } from '@services/config'
import { MethodologyEnum } from '@services/config/types'
import { componentCommands } from 'testing/commands/component'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'

import type { Command } from 'testing/commands/types'

describe('component snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput(join('simple', 'component'), commands)
  }

  beforeAll(() => {
    removeDir(Folder.src)
    mkdirSync(Folder.src)
    configService.changeMethodology(MethodologyEnum.simple)
  })

  afterAll(() => {
    configService.changeMethodology(MethodologyEnum.fsd)
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
