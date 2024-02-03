import { capitalizeFirst } from '@utils/strings'

export function generateLayerConfig(chosenSegmentsFolders: string[]) {
  return chosenSegmentsFolders.reduce((config, segmentFolder) => {
    const configKey = `with${capitalizeFirst(segmentFolder)}`

    config[configKey] = true

    return config
  }, {})
}
