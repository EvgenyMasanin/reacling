export const featureCommands = [
  {
    command: 'f follow',
    snapshotFileName: 'new-feature'
  },
  {
    command: 'f follow',
    snapshotFileName: 'feature-already-exist'
  },
  {
    command: 'fu follow follow-button',
    snapshotFileName: 'new-component'
  },
  {
    command: 'fu follow follow-button',
    snapshotFileName: 'component-already-exist'
  },
  {
    command: 'fu',
    snapshotFileName: 'missing-arguments'
  },
  {
    command: 'fu follow',
    snapshotFileName: 'missing-component-name'
  },
  {
    command: 'fu folow follow-button',
    snapshotFileName: 'feature-is-not-exist'
  }
] as const
