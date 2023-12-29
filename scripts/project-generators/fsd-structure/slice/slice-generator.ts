import { Folder } from 'scripts/constants'
import { mkdirIfNotExist } from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isDirExist } from 'scripts/utils/predicates'

import {
  createLib,
  createUi,
  getLayerFolderPath,
  getLayerPath
} from './helpers'

import { config } from 'scripts/utils/config'
import type { Layer, SliceConfig } from './types'

const defaultConfig: SliceConfig = {
  withUi: true,
  withApi: true,
  withLib: true,
  withModel: true
}

export const sliceGenerator = (
  layer: Layer,
  sliceName: string,
  _config: SliceConfig = defaultConfig
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
