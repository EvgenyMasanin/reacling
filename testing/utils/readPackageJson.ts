import { readFileSync } from 'fs'

export const readPackageJson = () =>
  JSON.parse(readFileSync('package.json').toString())
