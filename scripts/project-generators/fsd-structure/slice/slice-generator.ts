import { Folder } from 'scripts/constants'
import { isDirExist, mkdirIfNotExist } from 'utils/file-system'
import { logger } from 'utils/loggers'

import {
  createLib,
  createUi,
  getLayerFolderPath,
  getLayerPath
} from './helpers'

import { config } from 'scripts/services/config'
import type { Layer } from './types'

export const sliceGenerator = (
  layer: Layer,
  sliceName: string
) => {
  const layerFolderPath = getLayerFolderPath(layer)
  const layerPath = getLayerPath(layer, sliceName)

  mkdirIfNotExist(Folder.src, Folder[layer])

  if (isDirExist(layerPath)) {
    logger.addAlreadyExistLog(sliceName, layer)
    return false
  }

  mkdirIfNotExist(layerFolderPath, sliceName)

  const {
    withApi,
    withAssets,
    withConfig,
    withTypes,
    withUi,
    withLib,
    withModel
  } = config.getSliceConfig(layer)

  if (withUi) createUi(layerPath)

  if (withLib) createLib(layerPath)

  if (withApi) mkdirIfNotExist(layerPath, Folder.api)

  if (withModel) mkdirIfNotExist(layerPath, Folder.model)

  if (withAssets) mkdirIfNotExist(layerPath, Folder.assets)

  if (withConfig) mkdirIfNotExist(layerPath, Folder.config)

  if (withTypes) mkdirIfNotExist(layerPath, Folder.types)

  return true
}
