import { join } from 'path'
import { generateHook } from './generate-hook'
import { type GenerateFeatureHook } from 'scripts/types'
import { Folders } from 'scripts/constants'
import { isFileExist } from 'scripts/utils/predicates'
import { logger } from 'scripts/utils/loggers'
import { checkFeatureExistence } from './check-feature-existence'

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

  checkFeatureExistence(featureName, featureHooksDirPath)

  if (isFileExist(featureHooksDirPath, `${hookName}.ts`)) {
    logger.addAlreadyExistLog(hookName, 'hook')
    return
  }

  generateHook(hookName, featureHooksDirPath)
}
