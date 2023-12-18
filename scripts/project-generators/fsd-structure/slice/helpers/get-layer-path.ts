import { join } from 'path'
import { getLayerFolderPath } from './get-layer-folder-path'
import type { Layer } from '../types'

export const getLayerPath = (layer: Layer, name: string) => {
  const layerFolderPath = getLayerFolderPath(layer)

  return name ? join(layerFolderPath, name) : layerFolderPath
}
