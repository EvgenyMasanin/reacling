import { join } from 'path'
import { Folders } from 'scripts/constants'
import {
  appendToIndex,
  createComponentFiles,
  isDirExist,
  mkdirIfNotExist
} from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import type { Layer } from './types'
import { getLayerPath } from './helpers'

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

  const sliceUiPath = join(layerPath, Folders.ui)
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
