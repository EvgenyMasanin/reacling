import { validateName } from '../validate-name'

describe('validate name', () => {
  it('should return true if name is valid', () => {
    const isValid = validateName('avatar')

    expect(isValid).toBe(true)
  })

  it('should return false if name is invalid', () => {
    const isValid = validateName('avatar/q')

    expect(isValid).toBe(false)
  })

  it('should return false if name is falsy value', () => {
    const isValid1 = validateName(undefined)
    const isValid2 = validateName(null)
    const isValid3 = validateName('')

    expect(isValid1).toBe(false)
    expect(isValid2).toBe(false)
    expect(isValid3).toBe(false)
  })
})
