import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { REACLING_CONFIG } from 'scripts/constants'
import type { Layer } from 'scripts/project-generators/fsd-structure/slice/types'
import { deepMerge } from 'utils/deep-merge'
import { goUpFolder } from 'utils/file-system/go-up-folder'
import type { Methodology, ReaclingConfig, SliceStructure } from './types'

export class Config {
  readonly #config: ReaclingConfig

  constructor() {
    let userConfig: ReaclingConfig

    try {
      userConfig = this.userConfig
    } catch (error) {
      userConfig = this.innerConfig
    }

    this.#config = deepMerge(this.#config ?? {}, userConfig) as ReaclingConfig
  }

  #readConfig(path: string) {
    return JSON.parse(readFileSync(path, 'utf8')) as ReaclingConfig
  }

  get userConfig() {
    return this.#readConfig(join(__dirname, goUpFolder(5), REACLING_CONFIG))
  }

  get innerConfig() {
    return this.#readConfig(join(__dirname, goUpFolder(3), REACLING_CONFIG))
  }

  changeMethodology(methodology: Methodology) {
    const innerConfig = this.innerConfig
    innerConfig.methodology = methodology

    this.overwriteConfig(innerConfig)
  }

  overwriteConfig(newConfig: ReaclingConfig) {
    writeFileSync(
      join(__dirname, goUpFolder(3), REACLING_CONFIG),
      JSON.stringify(newConfig, null, 2)
    )
  }

  get methodology() {
    return this.#config.methodology
  }

  getSliceConfig(layer: Layer): SliceStructure {
    return this.#config.fsdStructure[layer]
  }

  getAppConfig() {
    return this.#config.fsdStructure.app
  }
}
