export function isFoldersAndFileNames(str: string) {
  const res = str.match(/.*\/.*/)

  return !!res
}
