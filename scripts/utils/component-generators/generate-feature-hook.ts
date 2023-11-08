import { join } from 'path'
import { generateHook } from './generate-hook'
import { type GenerateFeatureHook } from 'scripts/types'
import { logger } from '../loggers/logger'
import { Folders } from 'scripts/constants'
import { isFileExist } from '..'

export const generateFeatureHook: GenerateFeatureHook = (
  featureName,
  hookName
) => {
  const featureHooksDirPath = join(
    Folders.src,
    Folders.features,
    featureName,
    Folders.hooks
  )

  if (isFileExist(featureHooksDirPath, `${hookName}.ts`)) {
    logger.addLog('error', `Hook '${hookName}' is already exist!`)
    return
  }

  generateHook(hookName, featureHooksDirPath)
}
