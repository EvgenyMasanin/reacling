import { join } from 'path'
import { Folder } from 'scripts/constants'
import { type GenerateFeatureHook } from 'scripts/types'
import { logger } from 'scripts/utils/loggers'
import { isFileExist } from 'scripts/utils/predicates'
import { checkFeatureExistence } from './check-feature-existence'
import { generateHook } from './generate-hook'

export const generateFeatureHook: GenerateFeatureHook = (
  featureName,
  hookName
) => {
  const featureHooksDirPath = join(
    Folder.src,
    Folder.features,
    featureName,
    Folder.hooks
  )

  checkFeatureExistence(featureName, featureHooksDirPath)

  if (isFileExist(featureHooksDirPath, `${hookName}.ts`)) {
    logger.addAlreadyExistLog(hookName, 'hook')
    return
  }

  generateHook(hookName, featureHooksDirPath)
}
