import { join } from 'path'
import { Folder } from 'scripts/constants'
import { type GenerateFeatureComponent } from 'scripts/types'
import { appendToIndex } from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isDirExist } from 'scripts/utils/predicates'
import { checkFeatureExistence } from './check-feature-existence'
import { generateComponent } from './generate-component'

export const generateFeatureComponent: GenerateFeatureComponent = (
  featureName,
  componentName
) => {
  const featureComponentsDirPath = join(
    Folder.src,
    Folder.features,
    featureName,
    Folder.components
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
