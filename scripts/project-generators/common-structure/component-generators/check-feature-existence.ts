import { question } from 'scripts/utils/dialog'
import { isDirExist } from 'scripts/utils/predicates'
import { generateFeature } from './generate-feature'

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
