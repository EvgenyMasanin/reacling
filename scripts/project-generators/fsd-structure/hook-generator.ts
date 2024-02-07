import { join } from 'path'
import {
  appendToIndex,
  createFile,
  isDirExist,
  isFileExist,
  mkdirIfNotExist
} from '@utils/file-system'
import {
  Folder,
  layerDictionary,
  layerDictionarySingular,
  LayerFolder,
  SegmentFolder
} from '@scripts/constants'
import { logger } from '@utils/loggers'
import { toCamelCase } from '@utils/strings'

import { generateHookContent } from '../simple-structure/content-generators'

export function hookGenerator(hookName: string, slicePath: string) {
  const [layerName, sliceName] = slicePath.split('/')

  if (!sliceName) {
    logger.pushMissingArguments('"slice-name"')
    return
  }

  if (
    !Object.values(LayerFolder)
      .map((layerFolder) => layerDictionarySingular[layerFolder])
      .includes(layerName as LayerFolder)
  ) {
    logger.pushErrorLog(`Fsd methodology doesn't include "${layerName}" layer.`)
    logger.pushErrorLog(
      'Use one of the followings: entity, feature, widget, page!'
    )
    return
  }

  const layerFolderName = layerDictionary[layerName]

  const absoluteSlicePath = join(Folder.src, layerFolderName, sliceName)

  if (!isDirExist(absoluteSlicePath)) {
    console.log('🚀 ~ hookGenerator ~ absoluteSlicePath:', absoluteSlicePath)
    logger.pushNotExistLog(layerName, sliceName)
  }

  mkdirIfNotExist(absoluteSlicePath, SegmentFolder.lib)
  mkdirIfNotExist(join(absoluteSlicePath, SegmentFolder.lib), Folder.hooks)

  const hooksFolderPath = join(
    absoluteSlicePath,
    SegmentFolder.lib,
    Folder.hooks
  )

  const content = generateHookContent(toCamelCase(hookName))

  if (isFileExist(hooksFolderPath, `${hookName}.ts`)) {
    logger.pushAlreadyExistLog(
      'hook',
      `"${hookName}" of "${sliceName}" slice of "${layerName}" layer`
    )
    return
  }

  createFile(hooksFolderPath, `${hookName}.ts`, content)
  appendToIndex(hooksFolderPath, hookName)
}
