export const entityCommands = [
  {
    command: 'e user',
    snapshotFileName: 'new-entity'
  },
  {
    command: 'e user',
    snapshotFileName: 'entity-already-exist'
  },
  {
    command: 'eu user avatar',
    snapshotFileName: 'new-component'
  },
  {
    command: 'eu user avatar',
    snapshotFileName: 'component-already-exist'
  },
  {
    command: 'eu',
    snapshotFileName: 'missing-arguments'
  },
  {
    command: 'eu user',
    snapshotFileName: 'missing-component-name'
  },
  {
    command: 'eu usr avatar',
    snapshotFileName: 'entity-is-not-exist'
  },
  {
    command: 'eu user/user-card',
    snapshotFileName: 'new-component-shortcut'
  },
  {
    command: 'eu user/user-card',
    snapshotFileName: 'component-already-exist-shortcut'
  },
  {
    command: 'eu user/',
    snapshotFileName: 'missing-component-name-shortcut'
  }
] as const
