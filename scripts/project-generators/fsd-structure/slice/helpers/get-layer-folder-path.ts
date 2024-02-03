import { join } from 'path'
import { Folder } from '@scripts/constants'

import type { Layer } from '../types'

export const getLayerFolderPath = (layer: Layer) =>
  join(Folder.src, Folder[layer])
