import { cli } from '@services/cli'
import { Folder } from '@scripts/constants'
import { removeDir } from '@utils/file-system'
import { MethodologyEnum } from '@services/config/types'

import { execSync } from 'child_process'

import { progress } from './progress'
import { generateOptions } from './get-options'
import { readPackageJson } from '../readPackageJson'
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

  execSync(readPackageJson().scripts.build)

  if (methodology === 'all' || methodology === MethodologyEnum.fsd) {
    generateFsdSnapshots(options)
  }

  if (methodology === 'all' || methodology === MethodologyEnum.simple) {
    generateSimpleSnapshots(options)
  }

  removeDir(Folder.src)

  progress.finish()
}
