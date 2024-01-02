import { mkdirSync } from 'fs'
import { join } from 'path'
import { Folder } from 'scripts/constants'
import { config } from 'scripts/services/config'
import { pageCommands } from 'testing/commands'
import { componentCommands } from 'testing/commands/component'
import { hookCommands } from 'testing/commands/hook'
import { execCommands } from './exec-commands'
import { type Options } from './types'

export const generateSimpleSnapshots = (options: Options) => {
  const { component, hook, page, methodology } = options

  const generateAll = methodology === 'all' || (!page && !component && !hook)

  config.changeMethodology('common')

  mkdirSync(Folder.src)

  if (generateAll || component) {
    execCommands(join('simple/component'), componentCommands)
  }

  if (generateAll || page) {
    execCommands(join('simple/page'), pageCommands)
  }

  if (generateAll || hook) {
    execCommands(join('simple/hook'), hookCommands)
  }

  config.changeMethodology('fsd')
}
