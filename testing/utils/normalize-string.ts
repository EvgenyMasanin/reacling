export const normalizeConsoleOutput = (str: string) => {
  const toFilter = ['', '┌', '┐', '└', '┘', '─', '│', '\x1B']
  return str
    .replace(/\[\d[m]/g, '')
    .replace(/\[\d{2}[m]/g, '')
    .replace(/\.\s+/g, '.')
    .split('')
    .filter((char) => !toFilter.includes(char))
    .join('')
}
