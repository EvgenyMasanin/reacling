import { Folders } from 'scripts/constants'
import { sliceComponentGenerator } from '../slice/slice-component-generator'

export const entityComponentGenerator = (
  entityName: string,
  componentName: string
) => {
  sliceComponentGenerator(Folders.entities, entityName, componentName)
}
