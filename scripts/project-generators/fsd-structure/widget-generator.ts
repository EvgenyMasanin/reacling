import { join } from 'path'
import { Folders } from 'scripts/constants'
import { appendToIndex, createComponentFiles } from 'scripts/utils/file-system'
import { sliceGenerator } from './slice/slice-generator'

export const widgetGenerator = (name: string) => {
  const widgetFolderPath = join(Folders.src, Folders.widgets)
  const widgetPath = join(widgetFolderPath, name)
  const widgetUiPath = join(widgetPath, Folders.ui)

  const result = sliceGenerator(Folders.widgets, name, {
    withApi: false,
    withModel: false
  })

  if (!result) {
    return
  }

  createComponentFiles(widgetUiPath, name)

  appendToIndex(widgetFolderPath, name)
}
