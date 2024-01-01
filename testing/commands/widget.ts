import { type Commands } from './types'

export const widgetCommands: Commands = [
  {
    command: 'w profile',
    snapshotFileName: 'new-widget'
  },
  {
    command: 'w profile',
    snapshotFileName: 'widget-already-exist'
  },
  {
    command: 'w',
    snapshotFileName: 'missing-widget-name'
  }
]
