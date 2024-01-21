import { removeDir } from 'utils/file-system'

import { Folder } from 'scripts/constants'
import { cli } from 'scripts/services/cli'

import { progress } from './progress'
import { generateOptions } from './get-options'
import { writeParamsError } from './write-params-error'
import { generateFsdSnapshots } from './generate-fsd-snapshots'
import { generateSimpleSnapshots } from './generate-simple-snapshots'

const removeSrc = () => {
  removeDir(Folder.src)
}

export const generateAllSnapshots = () => {
  cli.yargs
    .scriptName('g-all-snapshots')
    .usage('Usage: $0 --option. If provide no options, generate all snapshots.')
  const { _: params, ...options } = generateOptions(cli.yargs)

  const methodology = options.methodology

  if (params.length !== 0) {
    writeParamsError()
    return
  }
  progress.writeToConsole()

  removeSrc()

  if (methodology === 'all' || methodology === 'fsd') {
    generateFsdSnapshots(options)
  }

  if (methodology === 'all' || methodology === 'simple') {
    generateSimpleSnapshots(options)
  }

  removeDir(Folder.src)

  progress.finish()
}
