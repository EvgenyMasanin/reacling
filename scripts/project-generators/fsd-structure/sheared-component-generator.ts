import { Folder } from 'scripts/constants'
import { sliceComponentGenerator } from './slice/slice-component-generator'

export const shearedComponentGenerator = (componentName: string) => {
  sliceComponentGenerator(Folder.sheared, '', componentName)
}
