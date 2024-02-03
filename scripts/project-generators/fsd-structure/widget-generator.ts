import { join } from 'path'
import { Folder } from '@scripts/constants'
import { appendToIndex, createComponentFiles } from '@utils/file-system'

import { sliceGenerator } from './slice/slice-generator'

export const widgetGenerator = (name: string) => {
  const widgetFolderPath = join(Folder.src, Folder.widgets)
  const widgetPath = join(widgetFolderPath, name)
  const widgetUiPath = join(widgetPath, Folder.ui)

  const result = sliceGenerator(Folder.widgets, name)

  if (!result) {
    return
  }

  createComponentFiles(widgetUiPath, name)

  appendToIndex(widgetFolderPath, name)
}
