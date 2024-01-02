import { join } from 'path'
import { Folder, INDEX } from 'scripts/constants'
import { createFile, mkdirIfNotExist } from 'utils/file-system'

export const createLib = (path: string) => {
  mkdirIfNotExist(path, Folder.lib)

  const layerLibPath = join(path, Folder.lib)

  mkdirIfNotExist(layerLibPath, Folder.hooks)
  mkdirIfNotExist(layerLibPath, Folder.helpers)

  createFile(join(layerLibPath, Folder.hooks), INDEX)
  createFile(join(layerLibPath, Folder.helpers), INDEX)
}
