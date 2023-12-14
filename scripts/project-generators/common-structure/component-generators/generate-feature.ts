import { mkdirSync } from 'fs'
import { join } from 'path'

import { Folders, INDEX, Status } from 'scripts/constants'
import { type GenerateFeature } from 'scripts/types'
import { createFile, mkdirIfNotExist } from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isDirExist } from 'scripts/utils/predicates'
import { generateFeatureIndexContent } from '../content-generators'

export const generateFeature: GenerateFeature = (featureName) => {
  mkdirIfNotExist(Folders.src, Folders.features)

  const featureDirPath = join(
    process.cwd(),
    Folders.src,
    Folders.features,
    featureName
  )
  const featureComponentsDirPath = join(featureDirPath, Folders.components)
  const featureHooksDirPath = join(featureDirPath, Folders.hooks)

  if (isDirExist(featureDirPath)) {
    logger.addLog(Status.error, `Feature '${featureName}' is already exist!`)
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
    logger.addLog(Status.error, error)
  }
}
