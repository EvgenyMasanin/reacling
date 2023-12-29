import { readFileSync } from 'fs'
import { join } from 'path'
import { Folder, INDEX } from 'scripts/constants'
import { config } from 'scripts/utils/config'
import {
  createComponentFiles,
  mkdirIfNotExist
} from 'scripts/utils/file-system'
import { createFileIfNotExist } from 'scripts/utils/file-system/create-file-if-not-exist'

const mkAppFolder = () => {
  const { withProviders } = config.getAppConfig()

  const appFolderPath = join(Folder.src, Folder.app)

  mkdirIfNotExist(Folder.src, Folder.app)
  if (withProviders) mkdirIfNotExist(appFolderPath, Folder.providers)
  const path = join(appFolderPath, `${Folder.app}.tsx`)
  try {
    readFileSync(path)
  } catch (error) {
    createComponentFiles(appFolderPath, Folder.app)
  }
}

const mkSharedFolder = () => {
  const shearedFolderPath = join(Folder.src, Folder.sheared)

  mkdirIfNotExist(Folder.src, Folder.sheared)
  mkdirIfNotExist(shearedFolderPath, Folder.ui)
  mkdirIfNotExist(shearedFolderPath, Folder.assets)
  mkdirIfNotExist(shearedFolderPath, Folder.lib)
  mkdirIfNotExist(shearedFolderPath, Folder.api)
  mkdirIfNotExist(shearedFolderPath, Folder.config)
  mkdirIfNotExist(shearedFolderPath, Folder.types)
}

const mkPagesFolder = () => {
  mkdirIfNotExist(Folder.src, Folder.pages)
  createFileIfNotExist(join(Folder.src, Folder.pages), INDEX)
}

export const initProject = () => {
  mkAppFolder()
  mkSharedFolder()
  mkPagesFolder()
  mkdirIfNotExist(Folder.src, Folder.widgets)
  mkdirIfNotExist(Folder.src, Folder.features)
  mkdirIfNotExist(Folder.src, Folder.entities)
}
