import { readdirSync } from 'fs'

export const isFileExist = (root: string, fileName: string) => {
  try {
    return readdirSync(root).includes(fileName)
  } catch (error) {
    return false
  }
}
