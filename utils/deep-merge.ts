type UnknownObject = Record<string, unknown>
function isObject(item: unknown): item is UnknownObject {
  return item && typeof item === 'object' && !Array.isArray(item)
}

export const deepMerge = (target: unknown, source: unknown) => {
  const targetClone = structuredClone(target)

  if (!source) return targetClone

  if (!isObject(targetClone) || !isObject(source)) return targetClone

  for (const key in source) {
    if (!isObject(source[key])) {
      targetClone[key] = source[key]
      continue
    }

    if (!targetClone[key]) targetClone[key] = {}

    deepMerge(targetClone[key], source[key])
  }
  return targetClone
}
