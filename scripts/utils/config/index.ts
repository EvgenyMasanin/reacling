import { readFileSync } from 'fs'
import { join } from 'path'
import { REACLING_CONFIG } from 'scripts/constants'
import type { Layer } from 'scripts/project-generators/fsd-structure/slice/types'
import type { ReaclingConfig, SliceStructure } from 'scripts/types'
import { deepMerge } from '../deep-merge'

class Config {
  readonly #config: ReaclingConfig

  constructor() {
    let userConfig: ReaclingConfig
    try {
      userConfig = JSON.parse(
        readFileSync(
          join(__dirname, '../../../../../', REACLING_CONFIG),
          'utf8'
        )
      ) as ReaclingConfig
    } catch (error) {
      userConfig = JSON.parse(
        readFileSync(join(__dirname, '../../../', REACLING_CONFIG), 'utf8')
      ) as ReaclingConfig
    }

    this.#config = deepMerge(this.#config ?? {}, userConfig) as ReaclingConfig
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

export const config = new Config()
