import { configService } from '@services/config'
import { MethodologyEnum } from '@services/config/types'

import { witchMethodologyQuestion } from './question/witch-methodology.question'
import { isProvideOwnStructureQuestion } from './question/is-provide-own-structure.question'
import { shouldGenerateDefaultConfigQuestion } from './question/should-generate-default-config.question'

export async function askAboutConfiguration() {
  const { fsdStructure: defaultFsdStructure } = configService.defaultConfig

  const isDefault = await shouldGenerateDefaultConfigQuestion()

  if (isDefault) {
    return configService.defaultConfig
  }

  const methodology = await witchMethodologyQuestion()

  if (methodology === MethodologyEnum.simple) {
    return { methodology }
  }

  const fsdStructure = await isProvideOwnStructureQuestion(defaultFsdStructure)

  return {
    methodology: MethodologyEnum.fsd,
    fsdStructure
  }
}
