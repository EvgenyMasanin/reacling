import { join } from 'path'
import { Folders, INDEX } from 'scripts/constants'
import { createFile, mkdirIfNotExist } from 'scripts/utils/file-system'

export const createLib = (path: string) => {
  mkdirIfNotExist(path, Folders.lib)

  const layerLibPath = join(path, Folders.lib)

  mkdirIfNotExist(layerLibPath, Folders.hooks)
  mkdirIfNotExist(layerLibPath, Folders.helpers)

  createFile(join(layerLibPath, Folders.hooks), INDEX)
  createFile(join(layerLibPath, Folders.helpers), INDEX)
}
