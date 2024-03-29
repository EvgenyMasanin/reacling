export const fsdHookCommands = [
  {
    command: 'h use-user entity/user',
    snapshotFileName: 'new-fsd-hook'
  },
  {
    command: 'h use-user entity/user',
    snapshotFileName: 'fsd-hook-already-exist'
  },
  {
    command: 'h use-user entity',
    snapshotFileName: 'fsd-hook-missing-slice-name'
  },
  {
    command: 'h use-user',
    snapshotFileName: 'fsd-hook-missing-slice-path'
  },
  {
    command: 'h use-user components/user',
    snapshotFileName: 'fsd-hook-wrong-layer-name'
  },
  {
    command: 'h',
    snapshotFileName: 'fsd-hook-missing-arguments'
  }
] as const
