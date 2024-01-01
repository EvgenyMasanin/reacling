import { execSync } from 'child_process'
import { readFileSync } from 'fs'

export const execScript = (parameters: string) => {
  const script = JSON.parse(readFileSync('package.json').toString()).scripts
    .reacling

  return execSync(`${script} ${parameters}`).toString()
}
