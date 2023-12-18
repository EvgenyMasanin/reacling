import { readFileSync } from 'fs'
import { createFile } from './create-file'
import { join } from 'path'

export const createFileIfNotExist = (
  directory: string,
  fileName: string,
  content: string = ''
) => {
  try {
    readFileSync(join(directory, fileName))
  } catch (error) {
    createFile(directory, fileName, content)
  }
}
