export const toSingular = (str: string) => {
  return str.at(-1) === 's' ? str.slice(0, -1) : str
}
