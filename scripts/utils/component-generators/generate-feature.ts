import { mkdirSync } from 'fs'
import { join } from 'path'
import {
  createFile,
  generateFeatureIndexContent,
  isDirExist,
  mkdirIfNotExist
} from '..'
import { logger } from '../loggers/logger'
import { Folders, INDEX } from 'scripts/constants'
import { type GenerateFeature } from 'scripts/types'

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
    logger.addLog('error', `Feature '${featureName}' is already exist!`)
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
    logger.addLog('error', error)
  }
}
