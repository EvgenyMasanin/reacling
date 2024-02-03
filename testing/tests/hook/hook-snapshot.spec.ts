import { join } from 'path'
import { mkdirSync } from 'fs'
import { Folder } from '@scripts/constants'
import { removeDir } from '@utils/file-system'
import { configService } from '@services/config'
import { hookCommands } from 'testing/commands/hook'
import { MethodologyEnum } from '@services/config/types'
import { equalConsoleOutput } from 'testing/utils/equal-console-output'

import type { Command } from 'testing/commands/types'
describe('hook snapshots', () => {
  const equalConsoleInitOutput = (commands: Command) => {
    equalConsoleOutput(join('simple', 'hook'), commands)
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
