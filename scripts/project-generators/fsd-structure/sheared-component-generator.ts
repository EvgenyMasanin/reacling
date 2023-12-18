import { Folders } from 'scripts/constants'
import { sliceComponentGenerator } from './slice/slice-component-generator'

export const shearedComponentGenerator = (componentName: string) => {
  sliceComponentGenerator(Folders.sheared, '', componentName)
}
