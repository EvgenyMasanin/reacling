import { join } from 'path'
import { readFileSync } from 'fs'
import {
  createComponentFiles,
  createFileIfNotExist,
  mkdirIfNotExist
} from '@utils/file-system'
import { configService } from '@services/config'
import { Folder, INDEX } from '@scripts/constants'

const mkAppFolder = () => {
  const { withProviders } = configService.getAppConfig()

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
  const sharedFolderPath = join(Folder.src, Folder.shared)

  mkdirIfNotExist(Folder.src, Folder.shared)
  mkdirIfNotExist(sharedFolderPath, Folder.ui)
  mkdirIfNotExist(sharedFolderPath, Folder.assets)
  mkdirIfNotExist(sharedFolderPath, Folder.lib)
  mkdirIfNotExist(sharedFolderPath, Folder.api)
  mkdirIfNotExist(sharedFolderPath, Folder.config)
  mkdirIfNotExist(sharedFolderPath, Folder.types)
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
