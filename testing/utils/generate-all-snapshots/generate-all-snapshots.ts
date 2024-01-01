import chalk from 'chalk'
import { mkdirSync } from 'fs'
import { Folder } from 'scripts/constants'
import { cli } from 'scripts/utils/cli'
import { removeDir } from 'scripts/utils/file-system/remove-dir'
import {
  entityCommands,
  featureCommands,
  initCommands,
  pageCommands,
  shearedCommands,
  widgetCommands
} from 'testing/commands'
import { execCommands } from './exec-commands'
import { execSnapshot } from './exec-snapshot'
import { generateOptions } from './get-options'
import { writeParamsError } from './write-params-error'

const removeSrc = () => {
  removeDir(Folder.src)
}

const joinStrings = (...strings: string[]) => strings.join(' ')

export const generateAllSnapshots = () => {
  const {
    entity,
    feature,
    init,
    page,
    sheared,
    widget,
    _: params
  } = cli.yargs
    .scriptName('g-all-snapshots')
    .usage('Usage: $0 --option. If provide no options, generate all snapshots.')
    .options(generateOptions())
    .parseSync()

  if (params.length !== 0) {
    writeParamsError()
    return
  }

  console.log(chalk.blue('🚀Starting...'))

  removeSrc()

  const generateAll =
    !entity && !feature && !init && !page && !sheared && !widget

  // ---------init-------------------------------------------------------
  if (generateAll || init) {
    const [init, onlySrc] = initCommands
    // execSnapshot('init init init')
    execSnapshot(joinStrings('init', init.snapshotFileName, init.command))

    removeSrc()
    mkdirSync(Folder.src)
    // execSnapshot('init only-src init')
    execSnapshot(joinStrings('init', onlySrc.snapshotFileName, onlySrc.command))
  }

  // ---------entity-----------------------------------------------------
  if (generateAll || entity) {
    execCommands('entity', entityCommands)
    // execSnapshot('entity new-entity e user')
    // execSnapshot('entity entity-already-exist e user')
    // execSnapshot('entity new-component eu user avatar')
    // execSnapshot('entity entity-is-not-exist eu usr avatar')
    // execSnapshot('entity component-already-exist eu user avatar')
    // execSnapshot('entity missing-arguments eu')
    // execSnapshot('entity missing-component-name eu user')
  }

  // ---------feature-----------------------------------------------------
  if (generateAll || feature) {
    execCommands('feature', featureCommands)

    // execSnapshot('feature new-feature f follow')
    // execSnapshot('feature feature-already-exist f follow')
    // execSnapshot('feature new-component fu follow follow-button')
    // execSnapshot('feature feature-is-not-exist fu folow follow-button')
    // execSnapshot('feature component-already-exist fu follow follow-button')
    // execSnapshot('feature missing-arguments fu')
    // execSnapshot('feature missing-component-name fu follow')
  }

  // ---------page--------------------------------------------------------
  if (generateAll || page) {
    execCommands('page', pageCommands)
    // execSnapshot('page new-page p profile')
    // execSnapshot('page already-exist p profile')
    // execSnapshot('page missing-page-name p')
  }

  // ---------sheared-----------------------------------------------------
  if (generateAll || sheared) {
    execCommands('sheared', shearedCommands)
    // execSnapshot('sheared new-component su button')
    // execSnapshot('sheared already-exist su button')
    // execSnapshot('sheared missing-component-name su')
  }

  // ---------widgets-----------------------------------------------------
  if (generateAll || widget) {
    execCommands('widget', widgetCommands)
    // execSnapshot('widget new-widget w profile')
    // execSnapshot('widget already-exist w profile')
    // execSnapshot('widget missing-widget-name w')
  }

  removeDir(Folder.src)

  console.log(chalk.blue('🚀Finished!🚀'))
}
