import { join } from 'path'
import { Folder } from 'scripts/constants'
import { config } from 'scripts/services/config'
import { pageCommands } from 'testing/commands'
import { componentCommands } from 'testing/commands/component'
import { hookCommands } from 'testing/commands/hook'
import { mkdirIfNotExist, removeDir } from 'utils/file-system'
import { execCommands } from './exec-commands'
import { progressPercents } from './progress-percents'
import { type Options } from './types'

export const generateSimpleSnapshots = (options: Options) => {
  const { component, hook, page, methodology } = options

  const generateAll = methodology === 'all' || (!page && !component && !hook)

  config.changeMethodology('common')

  const progressStep = progressPercents[methodology]

  removeDir(Folder.src)

  mkdirIfNotExist('.', Folder.src)

  if (generateAll || component) {
    execCommands(join('simple/component'), componentCommands, progressStep)
  }

  if (generateAll || page) {
    execCommands(join('simple/page'), pageCommands, progressStep)
  }

  if (generateAll || hook) {
    execCommands(join('simple/hook'), hookCommands, progressStep)
  }

  config.changeMethodology('fsd')
}
