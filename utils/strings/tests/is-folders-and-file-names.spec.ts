import { isFoldersAndFileNames } from '../is-folders-and-file-names'

describe('isFoldersAndFileNames', () => {
  it('should return true if input string contains folderNames and filename', () => {
    const result = isFoldersAndFileNames('user/user-card')

    expect(result).toBe(true)
  })

  it("should return false if input string doesn't contains folderNames and filename", () => {
    const result = isFoldersAndFileNames('user-card')

    expect(result).toBe(false)
  })
})
