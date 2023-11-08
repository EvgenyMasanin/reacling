import { accessSync } from 'fs'

export const isDirExist = (path: string) => {
  try {
    accessSync(path)
    return true
  } catch (error) {
    return false
  }
}
