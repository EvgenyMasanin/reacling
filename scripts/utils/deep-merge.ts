type UnknownObject = Record<string, unknown>
function isObject(item: unknown): item is UnknownObject {
  return item && typeof item === 'object' && !Array.isArray(item)
}

export const deepMerge = (target: unknown, source: unknown) => {
  if (!source) return target

  if (!isObject(target) || !isObject(source)) return target

  for (const key in source) {
    if (!isObject(source[key])) {
      target[key] = source[key]
      continue
    }

    if (!target[key]) target[key] = {}

    deepMerge(target[key], source[key])
  }
  return target
}
