import { join } from 'path'
import { Folder } from 'scripts/constants'
import { appendToIndex, createComponentFiles } from 'utils/file-system'
import { sliceGenerator } from './slice/slice-generator'

export const pageGenerator = (name: string) => {
  const pageFolderPath = join(Folder.src, Folder.pages)
  const pagePath = join(pageFolderPath, name)
  const pageUiPath = join(pagePath, Folder.ui)

  const result = sliceGenerator(Folder.pages, name)

  if (!result) {
    return
  }

  createComponentFiles(pageUiPath, name)

  appendToIndex(pageFolderPath, name)
}
