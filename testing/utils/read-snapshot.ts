import { readFileSync } from 'fs'
import { join } from 'path'

export const readSnapshot = (folderName: string, snapshotName: string) =>
  readFileSync(
    join('testing', 'snapshots', folderName, `${snapshotName}.txt`)
  ).toString()
