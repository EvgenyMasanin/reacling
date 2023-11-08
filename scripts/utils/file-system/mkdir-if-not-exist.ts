import { mkdirSync } from 'fs'
import { join } from 'path'
import { isDirExist } from '../predicates'

export const mkdirIfNotExist = (root: string, dir: string) => {
  if (!isDirExist(join(root, dir))) {
    mkdirSync(join(root, dir))
  }
}
