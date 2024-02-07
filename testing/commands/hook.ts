export const hookCommands = [
  {
    command: 'h use-header',
    snapshotFileName: 'new-hook'
  },
  {
    command: 'h use-header',
    snapshotFileName: 'hook-already-exist'
  },
  {
    command: 'h',
    snapshotFileName: 'missing-hook-name'
  }
] as const
