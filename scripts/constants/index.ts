import { join } from 'path'

export enum Folders {
  src = 'src',
  pages = 'pages',
  hooks = 'hooks',
  features = 'features',
  components = 'components',
  store = 'redux-store',
  reducers = 'reducers'
}

export const PAGE_FOLDER_PATH = join(Folders.src, Folders.pages)
export const STORE_FOLDER_PATH = join(Folders.src, Folders.store)
export const INDEX = 'index.ts'

export enum Status {
  success = 'success',
  error = 'error'
}
