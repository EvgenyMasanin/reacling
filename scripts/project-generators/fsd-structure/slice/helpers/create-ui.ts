import { join } from 'path'
import { Folders, INDEX } from 'scripts/constants'
import { createFile, mkdirIfNotExist } from 'scripts/utils/file-system'

export const createUi = (path: string) => {
  mkdirIfNotExist(path, Folders.ui)
  createFile(join(path, Folders.ui), INDEX)
}
