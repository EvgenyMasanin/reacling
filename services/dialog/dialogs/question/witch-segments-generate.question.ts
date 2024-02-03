import { createPrompt } from '@utils/inquirer/create-prompt'
import { Folder, LayerFolder, segmentsFolders } from '@scripts/constants'

import { generateLayerConfig } from '../../helpers/generate-layer-config'

import type { SegmentFolder } from '@scripts/constants'

export async function witchSegmentsGenerate(layerFolder: LayerFolder) {
  const prompt = await createPrompt()

  const message = `Select folders that will be includes in the ${layerFolder} slice folder:`

  if (layerFolder === LayerFolder.app) {
    const { chosenSegmentsFolders } = await prompt<{
      chosenSegmentsFolders: Folder.providers[]
    }>([
      {
        name: 'chosenSegmentsFolders',
        message,
        type: 'checkbox',
        choices: [{ name: Folder.providers }]
      }
    ])

    return generateLayerConfig(chosenSegmentsFolders)
  }

  const { chosenSegmentsFolders } = await prompt<{
    chosenSegmentsFolders: SegmentFolder[]
  }>([
    {
      name: 'chosenSegmentsFolders',
      message,
      type: 'checkbox',
      choices: segmentsFolders.map((segment) => ({
        name: segment
      }))
    }
  ])

  return generateLayerConfig(chosenSegmentsFolders)
}
