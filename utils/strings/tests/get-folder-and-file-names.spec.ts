import { getFoldersAndFileNames } from '../get-folders-and-file-names'

describe('getFolderAndFileNames', () => {
  it('should return object with slice name and file name', () => {
    const result = getFoldersAndFileNames('user/user-card')

    expect(result).toEqual({
      sliceName: 'user',
      foldersNames: [],
      fileName: 'user-card'
    })
  })

  it('should return object with slice name, folders names and file name', () => {
    const result = getFoldersAndFileNames('user/components/user-card')

    expect(result).toEqual({
      sliceName: 'user',
      foldersNames: ['components'],
      fileName: 'user-card'
    })
  })

  it('should return empty fields in object if input string is empty', () => {
    const result = getFoldersAndFileNames('')

    expect(result).toEqual({ sliceName: '', foldersNames: [], fileName: '' })
  })
})
