import { join } from 'path'
import { generateComponent } from './generate-component'
import { Folders } from 'scripts/constants'
import { type GenerateFeatureComponent } from 'scripts/types'
import { appendToIndex } from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isDirExist } from 'scripts/utils/predicates'
import { checkFeatureExistence } from './check-feature-existence'

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

  checkFeatureExistence(featureName, featureComponentsDirPath)

  if (isDirExist(join(featureComponentsDirPath, componentName))) {
    logger.addAlreadyExistLog(componentName, 'component')
    return
  }

  generateComponent(
    componentName,
    join(featureComponentsDirPath, componentName)
  )

  appendToIndex(featureComponentsDirPath, componentName)
}
