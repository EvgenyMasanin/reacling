import { mkdirSync } from 'fs'
import { Folder } from 'scripts/constants'
import {
  entityCommands,
  featureCommands,
  initCommands,
  pageCommands,
  shearedCommands,
  widgetCommands
} from 'testing/commands'
import { removeDir } from 'utils/file-system'
import { joinStrings } from 'utils/strings/join-strings'
import { execCommands } from './exec-commands'
import { execSnapshot } from './exec-snapshot'
import { progressPercents } from './progress-percents'
import { type Options } from './types'

export const generateFsdSnapshots = (options: Options) => {
  const { entity, feature, init, page, sheared, widget, methodology } = options

  const generateAll =
    methodology === 'all' ||
    (!entity && !feature && !init && !page && !sheared && !widget)

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

  // ---------sheared-----------------------------------------------------
  if (generateAll || sheared) {
    execCommands('sheared', shearedCommands, progressStep)
  }

  // ---------widgets-----------------------------------------------------
  if (generateAll || widget) {
    execCommands('widget', widgetCommands, progressStep)
  }
}