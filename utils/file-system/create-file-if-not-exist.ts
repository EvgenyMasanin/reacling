import { readFileSync } from 'fs'
import { join } from 'path'
import { createFile } from './create-file'

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
