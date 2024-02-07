import type { Command } from 'testing/commands/types'
import { execScript } from './exec-script'
import { readSnapshot } from './read-snapshot'
import { normalizeConsoleOutput } from './normalize-string'

export const equalConsoleOutput = (
  snapshotFolderName: string,
  commands: Command
) => {
  const { command, snapshotFileName } = commands

  const consoleOutput = execScript(command)
  console.log('🚀 ~ consoleOutput:', consoleOutput)

  const snapshot = readSnapshot(snapshotFolderName, snapshotFileName)

  expect(normalizeConsoleOutput(consoleOutput)).toBe(snapshot)
}
