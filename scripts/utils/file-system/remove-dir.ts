import { rmSync } from 'fs'

export const removeDir = (path: string) => {
  try {
    rmSync(path, {
      recursive: true,
      force: true
    })
  } catch (error) {}
}
