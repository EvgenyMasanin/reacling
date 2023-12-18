import { Folders } from 'scripts/constants'
import { sliceGenerator } from '../slice/slice-generator'

export const featureGenerator = (name: string) => {
  sliceGenerator(Folders.features, name)
}
