import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { hideBin } from 'yargs/helpers'
import { normalizeString } from './normalize-string'

const generateSnapshot = () => {
  const folder = hideBin(process.argv)[0]
  const fileName = hideBin(process.argv)[1]
  const parameters = hideBin(process.argv).slice(2).join(' ')

  const consoleOutput = execSync(
    `ts-node -r tsconfig-paths/register ./scripts/main.ts ${parameters}`
  ).toString()
  writeFileSync(
    `tests/snapshots/${folder}/${fileName}.txt`,
    normalizeString(consoleOutput)
  )
}

generateSnapshot()
