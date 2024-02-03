import { join } from 'path'
import { mkdirSync } from 'fs'
import { Folder } from '@scripts/constants'
import { pageCommands } from 'testing/commands'
import { removeDir } from '@utils/file-system'
import { configService } from '@services/config'
import { MethodologyEnum } from '@services/config/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'

import type { Command } from 'testing/commands/types'

describe('"simple" page snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput(join('simple', 'page'), commands)
  }

  beforeAll(() => {
    removeDir(Folder.src)
    mkdirSync(Folder.src)
    configService.changeMethodology(MethodologyEnum.simple)
  })

  afterAll(() => {
    removeDir(Folder.src)
    configService.changeMethodology(MethodologyEnum.fsd)
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
