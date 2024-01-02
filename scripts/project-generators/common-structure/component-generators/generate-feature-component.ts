import { join } from 'path'
import { Folder } from 'scripts/constants'
import { appendToIndex, isDirExist } from 'utils/file-system'
import { logger } from 'utils/loggers'
import { checkFeatureExistence } from './check-feature-existence'
import { generateComponent } from './generate-component'

export const generateFeatureComponent = (
  featureName: string,
  componentName: string
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
