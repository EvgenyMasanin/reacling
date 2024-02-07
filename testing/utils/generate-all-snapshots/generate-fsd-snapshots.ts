import { mkdirSync } from 'fs'
import {
  entityCommands,
  featureCommands,
  fsdHookCommands,
  initCommands,
  pageCommands,
  sharedCommands,
  widgetCommands
} from 'testing/commands'
import { Folder } from '@scripts/constants'
import { removeDir } from '@utils/file-system'
import { joinStrings } from '@utils/strings/join-strings'

import { execScript } from '../exec-script'
import { execCommands } from './exec-commands'
import { execSnapshot } from './exec-snapshot'
import { progressPercents } from './progress-percents'

import type { Options } from './types'
export const generateFsdSnapshots = (options: Options) => {
  const { entity, feature, init, page, shared, widget, methodology, hook } =
    options

  const generateAll =
    methodology === 'all' ||
    (!entity && !feature && !init && !page && !shared && !widget && !hook)

  const progressStep = progressPercents[methodology]

  // ---------init-------------------------------------------------------
  if (generateAll || init) {
    const [init, onlySrc] = initCommands
    execSnapshot(
      joinStrings('init', init.snapshotFileName, init.command),
      progressStep
    )

    removeDir(Folder.src)
    mkdirSync(Folder.src)

    execSnapshot(
      joinStrings('init', onlySrc.snapshotFileName, onlySrc.command),
      progressStep
    )
  }

  // ---------entity-----------------------------------------------------
  if (generateAll || entity) {
    execCommands('entity', entityCommands, progressStep)
  }

  // ---------feature-----------------------------------------------------
  if (generateAll || feature) {
    execCommands('feature', featureCommands, progressStep)
  }

  // ---------page--------------------------------------------------------
  if (generateAll || page) {
    execCommands('page', pageCommands, progressStep)
  }

  // ---------shared------------------------------------------------------
  if (generateAll || shared) {
    execCommands('shared', sharedCommands, progressStep)
  }

  // ---------widgets-----------------------------------------------------
  if (generateAll || widget) {
    execCommands('widget', widgetCommands, progressStep)
  }

  // ---------hooks-------------------------------------------------------
  if (generateAll || hook) {
    execScript('e user')
    execCommands('hook', fsdHookCommands, progressStep)
  }
}
