import { type Commands } from './types'

export const shearedCommands: Commands = [
  {
    command: 'su button',
    snapshotFileName: 'new-sheared'
  },
  {
    command: 'su button',
    snapshotFileName: 'sheared-already-exist'
  },
  {
    command: 'su',
    snapshotFileName: 'missing-sheared-name'
  }
]
