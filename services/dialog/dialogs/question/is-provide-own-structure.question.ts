import { LayerFolder, layersFolders } from '@scripts/constants'
import { createPrompt } from '@utils/inquirer/create-prompt'

import { SimpleAnswerList, simpleAnswerMap } from '../../answers'
import { witchSegmentsGenerate } from './witch-segments-generate.question'

import type { ReaclingConfig } from '@services/config/types'

import type { SimpleAnswer } from '../../answers'

export async function isProvideOwnStructureQuestion(
  fsdStructure: ReaclingConfig['fsdStructure']
) {
  const prompt = await createPrompt()

  const config: ReaclingConfig['fsdStructure'] = {}

  const layersFoldersWithoutShared = layersFolders.filter(
    (layerFolder) => layerFolder !== LayerFolder.shared
  )

  for (let i = 0; i < layersFoldersWithoutShared.length; i++) {
    const layerFolder = layersFoldersWithoutShared[i]

    const { isProvideOwnStructure } = await prompt<{
      isProvideOwnStructure: boolean
    }>([
      {
        name: 'isProvideOwnStructure',
        message: `Provide your own structure for ${layerFolder}:`,
        type: 'list',
        choices: SimpleAnswerList,
        filter: (input: SimpleAnswer) => simpleAnswerMap[input]
      }
    ])

    if (isProvideOwnStructure) {
      config[layerFolder] = await witchSegmentsGenerate(layerFolder)
    } else {
      config[layerFolder] = fsdStructure[layerFolder]
    }
  }

  return config
}
