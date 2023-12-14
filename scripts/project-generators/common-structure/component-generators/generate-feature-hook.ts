import { join } from 'path'
import { generateHook } from './generate-hook'
import { type GenerateFeatureHook } from 'scripts/types'
import { Folders, Status } from 'scripts/constants'
import { isFileExist } from 'scripts/utils/predicates'
import { logger } from 'scripts/utils/loggers'

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
    logger.addLog(Status.error, `Hook '${hookName}' is already exist!`)
    return
  }

  generateHook(hookName, featureHooksDirPath)
}
