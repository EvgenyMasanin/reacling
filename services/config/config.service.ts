import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import { REACLING_CONFIG } from '@scripts/constants'
import { goUpFolder } from '@utils/file-system/go-up-folder'

import { defaultConfig } from './default.config'

import type { Layer } from '@scripts/project-generators/fsd-structure/slice/types'
import type { MethodologyEnum, ReaclingConfig, SliceStructure } from './types'

export class ConfigService {
  readonly #config: ReaclingConfig

  readonly #userConfigPath = join(__dirname, goUpFolder(4), REACLING_CONFIG)
  readonly #innerConfigPath = join(__dirname, goUpFolder(2), REACLING_CONFIG)
  constructor() {
    this.#config = this.userConfig ? this.userConfig : this.defaultConfig
  }

  #readConfig(path: string) {
    let config: ReaclingConfig = null
    try {
      config = JSON.parse(readFileSync(path, 'utf8')) as ReaclingConfig
    } catch {}
    return config
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

  changeMethodology(methodology: MethodologyEnum) {
    const innerConfig = this.defaultConfig
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
