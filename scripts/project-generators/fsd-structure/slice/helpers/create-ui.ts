import { join } from 'path'
import { Folder, INDEX } from 'scripts/constants'
import { createFile, mkdirIfNotExist } from 'utils/file-system'

export const createUi = (path: string) => {
  mkdirIfNotExist(path, Folder.ui)
  createFile(join(path, Folder.ui), INDEX)
}
