import chalk from 'chalk'
import { execSync } from 'child_process'

export const execSnapshot = (params: string) => {
  console.log(
    chalk.blue(`🚀Snapshot "${params.split(' ').slice(0, 2).join(' ')}" is saved.`)
  )
  const script =
    'ts-node -r tsconfig-paths/register ./testing/utils/generate-snapshot.ts g'
  execSync(`${script} ${params}`)
}
