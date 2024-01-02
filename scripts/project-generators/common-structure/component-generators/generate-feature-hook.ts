import { join } from 'path'
import { Folder } from 'scripts/constants'
import { logger } from 'utils/loggers'
import { checkFeatureExistence } from './check-feature-existence'
import { generateHook } from './generate-hook'
import { isFileExist } from 'utils/file-system'

export const generateFeatureHook = (featureName: string, hookName: string) => {
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
