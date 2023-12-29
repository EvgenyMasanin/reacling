import type { Folder } from 'scripts/constants'

export type Layer =
  | Folder.app
  | Folder.pages
  | Folder.widgets
  | Folder.features
  | Folder.entities
  | Folder.sheared

export interface SliceConfig {
  withUi?: boolean
  withApi?: boolean
  withLib?: boolean
  withModel?: boolean
}
