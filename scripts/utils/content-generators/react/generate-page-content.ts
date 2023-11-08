import { toCamelCase } from 'scripts/utils'

export const generatePageContent = (name: string) => {
  const pageName = toCamelCase(name)
  return `export const ${pageName} = () => {
  return <div>${pageName}</div>
}

`
}
