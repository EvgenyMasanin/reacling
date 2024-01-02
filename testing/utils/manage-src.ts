import { Folder } from 'scripts/constants'
import { removeDir } from 'utils/file-system'
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
