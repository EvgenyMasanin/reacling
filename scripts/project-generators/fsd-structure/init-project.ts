import { readFileSync } from 'fs'
import { join } from 'path'
import { Folders, INDEX } from 'scripts/constants'
import { config } from 'scripts/utils/config'
import {
  createComponentFiles,
  mkdirIfNotExist
} from 'scripts/utils/file-system'
import { createFileIfNotExist } from 'scripts/utils/file-system/create-file-if-not-exist'

const mkAppFolder = () => {
  const { withProviders } = config.getAppConfig()

  const appFolderPath = join(Folders.src, Folders.app)

  mkdirIfNotExist(Folders.src, Folders.app)
  if (withProviders) mkdirIfNotExist(appFolderPath, Folders.providers)
  const path = join(appFolderPath, `${Folders.app}.tsx`)
  try {
    readFileSync(path)
  } catch (error) {
    createComponentFiles(appFolderPath, Folders.app)
  }
}

const mkSharedFolder = () => {
  const shearedFolderPath = join(Folders.src, Folders.sheared)

  mkdirIfNotExist(Folders.src, Folders.sheared)
  mkdirIfNotExist(shearedFolderPath, Folders.ui)
  mkdirIfNotExist(shearedFolderPath, Folders.assets)
  mkdirIfNotExist(shearedFolderPath, Folders.lib)
  mkdirIfNotExist(shearedFolderPath, Folders.api)
  mkdirIfNotExist(shearedFolderPath, Folders.config)
  mkdirIfNotExist(shearedFolderPath, Folders.types)
}

const mkPagesFolder = () => {
  mkdirIfNotExist(Folders.src, Folders.pages)
  createFileIfNotExist(join(Folders.src, Folders.pages), INDEX)
}

export const initProject = () => {
  mkAppFolder()
  mkSharedFolder()
  mkPagesFolder()
  mkdirIfNotExist(Folders.src, Folders.widgets)
  mkdirIfNotExist(Folders.src, Folders.features)
  mkdirIfNotExist(Folders.src, Folders.entities)
}
