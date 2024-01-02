export const pageCommands = [
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
] as const
