import { join } from 'path'

export enum Folder {
  src = 'src',
  hooks = 'hooks',
  components = 'components',
  store = 'redux-store',
  reducers = 'reducers',

  app = 'app',
  pages = 'pages',
  widgets = 'widgets',
  features = 'features',
  entities = 'entities',
  sheared = 'sheared',
  providers = 'providers',

  ui = 'ui',
  assets = 'assets',
  lib = 'lib',
  api = 'api',
  config = 'config',
  types = 'types',
  model = 'model',
  helpers = 'helpers'
}

export const PAGE_FOLDER_PATH = join(Folder.src, Folder.pages)
export const STORE_FOLDER_PATH = join(Folder.src, Folder.store)
export const INDEX = 'index.ts'

export const REACLING_CONFIG = 'reacling.json'

export enum Status {
  success = 'success',
  error = 'error'
}
