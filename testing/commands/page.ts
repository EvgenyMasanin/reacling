import { type Commands } from './types'

export const pageCommands: Commands = [
  {
    command: 'p profile',
    snapshotFileName: 'new-page'
  },
  {
    command: 'p profile',
    snapshotFileName: 'page-already-exist'
  },
  {
    command: 'p',
    snapshotFileName: 'missing-page-name'
  }
]
