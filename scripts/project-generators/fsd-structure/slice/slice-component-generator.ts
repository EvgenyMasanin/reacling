import { join } from 'path'
import { Folder } from 'scripts/constants'
import {
  appendToIndex,
  createComponentFiles,
  isDirExist,
  mkdirIfNotExist
} from 'utils/file-system'
import { logger } from 'utils/loggers'
import { getLayerPath } from './helpers'
import type { Layer } from './types'

export const sliceComponentGenerator = (
  layer: Layer,
  sliceName: string,
  componentName: string
) => {
  const layerPath = getLayerPath(layer, sliceName)
  if (!isDirExist(layerPath)) {
    logger.addNotExistLog(sliceName, layer)
    return
  }

  const sliceUiPath = join(layerPath, Folder.ui)
  if (isDirExist(join(sliceUiPath, componentName))) {
    logger.addAlreadyExistLog(
      componentName,
      `component of ${sliceName} ${layer}`
    )
    return
  }

  mkdirIfNotExist(sliceUiPath, componentName)
  createComponentFiles(join(sliceUiPath, componentName), componentName)
  appendToIndex(sliceUiPath, componentName)
}
