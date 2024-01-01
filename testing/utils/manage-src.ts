import { Folder } from 'scripts/constants'
import { removeDir } from 'scripts/utils/file-system/remove-dir'
import { execScript } from './exec-script'

export const manageSrc = () => {
  beforeAll(() => {
    removeDir(Folder.src)
    execScript('init')
  })

  afterAll(() => {
    removeDir(Folder.src)
  })
}
