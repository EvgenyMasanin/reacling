import { normalizeString } from './normalize-string'

export const equalConsoleOutput = (consoleOutput: string, snapshot: string) => {
  expect(normalizeString(consoleOutput)).toBe(snapshot)
}
