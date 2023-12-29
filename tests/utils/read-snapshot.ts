import { readFileSync } from 'fs'
import { join } from 'path'

export const readSnapshot = (folderName: string, snapshotName: string) =>
  readFileSync(
    join('tests', 'snapshots', folderName, `${snapshotName}.txt`)
  ).toString()
