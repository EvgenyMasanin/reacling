export const normalizeString = (str: string) => {
  const toFilter = ['', ' ', '\n', '\x1B']
  return str
    .replace(/\[\d[m]/g, '')
    .replace(/\[\d{2}[m]/g, '')
    .split('')
    .filter((char) => !toFilter.includes(char))
    .join('')
}
