import { join } from 'path'
import { generateComponent } from './generate-component'
import { Folders, Status } from 'scripts/constants'
import { type GenerateFeatureComponent } from 'scripts/types'
import { appendToIndex } from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isDirExist } from 'scripts/utils/predicates'

export const generateFeatureComponent: GenerateFeatureComponent = (
  featureName,
  componentName
) => {
  const featureComponentsDirPath = join(
    Folders.src,
    Folders.features,
    featureName,
    Folders.components
  )

  if (isDirExist(join(featureComponentsDirPath, componentName))) {
    logger.addLog(
      Status.error,
      `Component '${componentName}' is already exist!`
    )
    return
  }

  generateComponent(
    componentName,
    join(featureComponentsDirPath, componentName)
  )

  appendToIndex(featureComponentsDirPath, componentName)
}
