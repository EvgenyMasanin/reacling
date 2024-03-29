import { join } from 'path'
import {
  appendToIndex,
  createComponentFiles,
  createFile
} from '@utils/file-system'
import { Folder, INDEX } from '@scripts/constants'

import { sliceGenerator } from './slice/slice-generator'
import { generateIndexContent } from '../simple-structure/content-generators'

export const pageGenerator = (name: string) => {
  const pageFolderPath = join(Folder.src, Folder.pages)
  const pagePath = join(pageFolderPath, name)
  const pageUiPath = join(pagePath, Folder.ui)

  const result = sliceGenerator(Folder.pages, name)

  if (!result) {
    return
  }

  createComponentFiles(pageUiPath, name)
  createFile(pagePath, INDEX, generateIndexContent(Folder.ui))

  appendToIndex(pageFolderPath, name)
}
