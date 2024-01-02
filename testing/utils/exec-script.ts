import { execSync } from 'child_process'
import { readPackageJson } from './readPackageJson'

export const execScript = (parameters: string) => {
  const script = readPackageJson().scripts.reacling

  return execSync(`${script} ${parameters}`).toString()
}
