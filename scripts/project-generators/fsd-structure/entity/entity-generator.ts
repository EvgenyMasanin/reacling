import { Folders } from 'scripts/constants'
import { sliceGenerator } from '../slice/slice-generator'

export const entityGenerator = (name: string) => {
  sliceGenerator(Folders.entities, name)
}
