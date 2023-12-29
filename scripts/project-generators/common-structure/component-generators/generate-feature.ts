import { mkdirSync } from 'fs'
import { join } from 'path'
import { Folder, INDEX } from 'scripts/constants'
import { type GenerateFeature } from 'scripts/types'
import { createFile, mkdirIfNotExist } from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isDirExist } from 'scripts/utils/predicates'
import { generateFeatureIndexContent } from '../content-generators'

export const generateFeature: GenerateFeature = (featureName) => {
  mkdirIfNotExist(Folder.src, Folder.features)

  const featureDirPath = join(
    process.cwd(),
    Folder.src,
    Folder.features,
    featureName
  )
  const featureComponentsDirPath = join(featureDirPath, Folder.components)
  const featureHooksDirPath = join(featureDirPath, Folder.hooks)

  if (isDirExist(featureDirPath)) {
    logger.addAlreadyExistLog(featureName, 'feature')
    return
  }

  try {
    mkdirSync(featureDirPath)
    mkdirSync(featureComponentsDirPath)
    mkdirSync(featureHooksDirPath)

    createFile(featureComponentsDirPath, INDEX)
    createFile(featureDirPath, INDEX, generateFeatureIndexContent())
    createFile(featureHooksDirPath, INDEX)
  } catch (error) {
    logger.addErrorLog(error)
  }
}
