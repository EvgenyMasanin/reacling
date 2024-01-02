import { type Command } from 'testing/commands/types'
import { execScript } from './exec-script'
import { normalizeConsoleOutput } from './normalize-string'
import { readSnapshot } from './read-snapshot'

export const equalConsoleOutput = (
  snapshotName: string,
  entityCommands: Command
) => {
  const { command, snapshotFileName } = entityCommands

  const consoleOutput = execScript(command)

  const snapshot = readSnapshot(snapshotName, snapshotFileName)

  expect(normalizeConsoleOutput(consoleOutput)).toBe(snapshot)
}
