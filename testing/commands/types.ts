export interface Command {
  command: string
  snapshotFileName: string
}

export type Commands = ReadonlyArray<Readonly<Command>>
