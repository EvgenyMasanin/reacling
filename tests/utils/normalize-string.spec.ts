import { normalizeString } from './normalize-string'

describe('normalizeString', () => {
  it('must normalize', () => {
    const inputStr = '\x1B[32m Success result: \n'
    const outputStr = 'Successresult:'

    expect(normalizeString(inputStr)).toBe(outputStr)
  })
})
