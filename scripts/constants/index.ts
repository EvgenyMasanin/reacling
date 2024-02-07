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
  shared = 'shared',
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

export enum LayerFolder {
  app = 'app',
  pages = 'pages',
  widgets = 'widgets',
  features = 'features',
  entities = 'entities',
  shared = 'shared'
}

export enum SegmentFolder {
  ui = 'ui',
  assets = 'assets',
  lib = 'lib',
  api = 'api',
  config = 'config',
  types = 'types',
  model = 'model',
  helpers = 'helpers'
}

export const layerDictionarySingular = {
  app: 'app',
  entities: 'entity',
  features: 'feature',
  widgets: 'widget',
  pages: 'page',
  shared: 'shared'
}

export const layerDictionary = {
  app: 'app',
  entity: 'entities',
  feature: 'features',
  widget: 'widgets',
  page: 'pages',
  shared: 'shared'
}

export const layersFolders = Object.values(LayerFolder)
export const segmentsFolders = Object.values(SegmentFolder)

export const PAGE_FOLDER_PATH = join(Folder.src, Folder.pages)
export const STORE_FOLDER_PATH = join(Folder.src, Folder.store)
export const INDEX = 'index.ts'

export const REACLING_CONFIG = 'reacling.json'

export enum Status {
  success = 'success',
  error = 'error',
  info = 'info'
}

export const padding = { top: 0, bottom: 0, left: 2, right: 0 }
