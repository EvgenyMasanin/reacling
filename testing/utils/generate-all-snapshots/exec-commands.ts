import type { Commands } from 'testing/commands/types'
import { execSnapshot } from './exec-snapshot'

const joinStrings = (...strings: string[]) => strings.join(' ')

export const execCommands = (
  commandName: string,
  commands: Commands,
  progressStep: number
) => {
  commands.forEach(({ command, snapshotFileName }) => {
    execSnapshot(
      joinStrings(commandName, snapshotFileName, command),
      progressStep
    )
  })
}
