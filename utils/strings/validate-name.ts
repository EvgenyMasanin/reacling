export function validateName(name: string) {
  if (!name) return false

  const isMatch = !!name.match(/[\/\\]/g)
  return !isMatch
}
