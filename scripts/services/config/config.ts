import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { REACLING_CONFIG } from 'scripts/constants'
import type { Layer } from 'scripts/project-generators/fsd-structure/slice/types'
import { deepMerge } from 'utils/deep-merge'
import { goUpFolder } from 'utils/file-system/go-up-folder'
import { defaultConfig } from './default.config'
import type { Methodology, ReaclingConfig, SliceStructure } from './types'

export class Config {
  readonly #config: ReaclingConfig

  readonly #userConfigPath = join(__dirname, goUpFolder(5), REACLING_CONFIG)
  readonly #innerConfigPath = join(__dirname, goUpFolder(3), REACLING_CONFIG)

  constructor() {
    let userConfig: ReaclingConfig

    try {
      userConfig = this.userConfig
    } catch (error) {
      userConfig = this.defaultConfig
    }

    this.#config = deepMerge(this.#config ?? {}, userConfig) as ReaclingConfig
  }

  #readConfig(path: string) {
    return JSON.parse(readFileSync(path, 'utf8')) as ReaclingConfig
  }

  get userConfig() {
    return this.#readConfig(this.#userConfigPath)
  }

  get innerConfig() {
    return this.#readConfig(this.#innerConfigPath)
  }

  get defaultConfig() {
    return defaultConfig
  }

  changeMethodology(methodology: Methodology) {
    const innerConfig = this.innerConfig
    innerConfig.methodology = methodology

    this.overwriteInnerConfig(innerConfig)
  }

  overwriteInnerConfig(newConfig: ReaclingConfig) {
    writeFileSync(this.#innerConfigPath, JSON.stringify(newConfig, null, 2))
  }

  overwriteUserConfig(newConfig: ReaclingConfig) {
    writeFileSync(this.#userConfigPath, JSON.stringify(newConfig, null, 2))
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
