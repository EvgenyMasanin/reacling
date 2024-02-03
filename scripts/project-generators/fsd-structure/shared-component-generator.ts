import { Folder } from '@scripts/constants'

import { sliceComponentGenerator } from './slice/slice-component-generator'

export const sharedComponentGenerator = (componentName: string) => {
  sliceComponentGenerator(Folder.shared, '', componentName)
}
