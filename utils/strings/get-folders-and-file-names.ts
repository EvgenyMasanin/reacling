export function getFoldersAndFileNames(str: string) {
  const names = str.split('/')

  const sliceName = names.slice(0, 1)[0]
  const foldersNames = names.slice(1, names.length - 1)
  const fileName = names.slice(-1)[0]

  return { sliceName, foldersNames, fileName }
}
