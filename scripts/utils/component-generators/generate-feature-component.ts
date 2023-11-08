import { join } from 'path'
import { appendToIndex, isDirExist } from '..'
import { generateComponent } from './generate-component'
import { logger } from '../loggers/logger'
import { Folders } from 'scripts/constants'
import { type GenerateFeatureComponent } from 'scripts/types'

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
    logger.addLog('error', `Component '${componentName}' is already exist!`)
    return
  }

  generateComponent(
    componentName,
    join(featureComponentsDirPath, componentName)
  )

  appendToIndex(featureComponentsDirPath, componentName)
}
