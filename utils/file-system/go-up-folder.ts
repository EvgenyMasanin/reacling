import { join } from 'path'
export const goUpFolder = (upFolderCount: number) =>
  join(...Array(upFolderCount).fill('..'))
