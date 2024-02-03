import { Folder } from '@scripts/constants'

import { sliceGenerator } from '../slice/slice-generator'

export const featureGenerator = (name: string) => {
  sliceGenerator(Folder.features, name)
}
