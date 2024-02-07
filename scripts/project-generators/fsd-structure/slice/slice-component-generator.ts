import { join } from 'path'
import {
  appendToIndex,
  createComponentFiles,
  isDirExist,
  mkdirIfNotExist
} from '@utils/file-system'
import { logger } from '@utils/loggers'
import { handleFail } from '@scripts/errors'
import { Folder } from '@scripts/constants'
import { isFoldersAndFileNames } from '@utils/strings/is-folders-and-file-names'
import { getFoldersAndFileNames } from '@utils/strings/get-folders-and-file-names'

import { getLayerPath } from './helpers'
import { sliceGenerator } from './slice-generator'

import type { Layer } from './types'
export const sliceComponentGenerator = (
  layerName: Layer,
  sliceNameOrSliceAndFileNames: string,
  componentName: string
) => {
  if (!componentName && isFoldersAndFileNames(sliceNameOrSliceAndFileNames)) {
    const { sliceName, fileName } = getFoldersAndFileNames(
      sliceNameOrSliceAndFileNames
    )
    if (!isDirExist(getLayerPath(layerName, sliceName))) {
      sliceGenerator(layerName, sliceName)
    }

    return sliceComponentGenerator(layerName, sliceName, fileName)
  }
  if (!componentName) {
    handleFail(1)
    return
  }

  const layerPath = getLayerPath(layerName, sliceNameOrSliceAndFileNames)
  if (!isDirExist(layerPath)) {
    logger.pushNotExistLog(sliceNameOrSliceAndFileNames, layerName)
    return
  }

  const sliceUiPath = join(layerPath, Folder.ui)
  if (isDirExist(join(sliceUiPath, componentName))) {
    logger.pushAlreadyExistLog(
      componentName,
      `component of ${sliceNameOrSliceAndFileNames} ${layerName}`
    )
    return
  }

  mkdirIfNotExist(sliceUiPath, componentName)
  createComponentFiles(join(sliceUiPath, componentName), componentName)
  appendToIndex(sliceUiPath, componentName)
}
