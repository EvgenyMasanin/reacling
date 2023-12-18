import { readFileSync } from 'fs'
import type { Layer } from 'scripts/project-generators/fsd-structure/slice/types'
import type { ReaclingConfig, SliceStructure } from 'scripts/types'
import { deepMerge } from '../deep-merge'
import { REACLING_CONFIG } from 'scripts/constants'
import { join } from 'path'

class Config {
  readonly #config: ReaclingConfig = {
    methodology: 'fsd',
    fsdStructure: {
      app: { withProviders: true },
      pages: {
        withLib: true,
        withUi: true
      },
      widgets: {
        withLib: true,
        withUi: true
      },
      features: {
        withApi: true,
        withLib: true,
        withModel: true,
        withUi: true
      },
      entities: {
        withApi: true,
        withLib: true,
        withModel: true,
        withUi: true
      }
    }
  }

  constructor() {
    let userConfig: ReaclingConfig
    try {
      userConfig = JSON.parse(
        readFileSync(`../${REACLING_CONFIG}`, 'utf8')
      ) as ReaclingConfig
    } catch (error) {
      console.log(
        "🚀 ~ constructor ~ join(__dirname, '../../../', REACLING_CONFIG):",
        join(__dirname, '../../../', REACLING_CONFIG)
      )
      userConfig = JSON.parse(
        readFileSync(join(__dirname, '../../../', REACLING_CONFIG), 'utf8')
      ) as ReaclingConfig
    }

    this.#config = deepMerge(this.#config, userConfig) as ReaclingConfig
  }

  getMethodology() {
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
