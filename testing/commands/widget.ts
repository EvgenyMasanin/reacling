export const widgetCommands = [
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
] as const
