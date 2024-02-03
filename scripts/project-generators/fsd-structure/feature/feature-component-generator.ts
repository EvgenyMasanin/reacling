import { Folder } from '@scripts/constants'

import { sliceComponentGenerator } from '../slice/slice-component-generator'

export const featureComponentGenerator = (
  featureName: string,
  componentName: string
) => {
  sliceComponentGenerator(Folder.features, featureName, componentName)
}
