import chalk from 'chalk'
import { execSync } from 'child_process'
import { readPackageJson } from '../readPackageJson'

export const execSnapshot = (params: string) => {
  console.log(
    chalk.blue(
      `🚀Snapshot "${params.split(' ').slice(0, 2).join(' ')}" is saved.`
    )
  )
  const script = readPackageJson().scripts.snapshot

  execSync(`${script} g ${params}`)
}
