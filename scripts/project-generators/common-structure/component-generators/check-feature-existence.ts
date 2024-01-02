import { question } from 'scripts/services/dialog'
import { generateFeature } from './generate-feature'
import { isDirExist } from 'utils/file-system'

// TODO: add this to entity
export const checkFeatureExistence = (
  featureName: string,
  featureDirPath: string
) => {
  if (isDirExist(featureDirPath)) return
  const answer = question(
    `Feature ${featureName} does not exist. Add this one? (y/n): `
  )

  if (answer === 'n') return

  generateFeature(featureName)
}
