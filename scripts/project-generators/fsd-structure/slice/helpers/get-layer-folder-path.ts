import { join } from 'path'
import { Folders } from 'scripts/constants'
import type { Layer } from '../types'

export const getLayerFolderPath = (layer: Layer) =>
  join(Folders.src, Folders[layer])
