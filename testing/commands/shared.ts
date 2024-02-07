export const sharedCommands = [
  {
    command: 'su button',
    snapshotFileName: 'new-shared'
  },
  {
    command: 'su button',
    snapshotFileName: 'shared-already-exist'
  },
  {
    command: 'su',
    snapshotFileName: 'missing-shared-name'
  }
] as const
