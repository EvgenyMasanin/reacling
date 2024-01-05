import { execSync } from 'child_process'
import { readPackageJson } from '../readPackageJson'
import { progress } from './progress'

export const execSnapshot = (params: string, progressStep?: number) => {
  const script = readPackageJson().scripts.snapshot

  execSync(`${script} g ${params}`)
  progress.increaseProgressAndShow(progressStep)
}
