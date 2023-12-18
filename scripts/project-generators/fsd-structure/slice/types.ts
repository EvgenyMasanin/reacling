import type { Folders } from 'scripts/constants'

export type Layer =
  | Folders.app
  | Folders.pages
  | Folders.widgets
  | Folders.features
  | Folders.entities
  | Folders.sheared

export interface SliceConfig {
  withUi?: boolean
  withApi?: boolean
  withLib?: boolean
  withModel?: boolean
}
