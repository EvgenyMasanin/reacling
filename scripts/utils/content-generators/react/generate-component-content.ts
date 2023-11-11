import { toCamelCase } from 'scripts/utils'

export const generateComponentContent = (name: string) => {
  const componentName = toCamelCase(name)

  return `export interface ${componentName}Props {}

export const ${componentName} = ({}: ${componentName}Props) => {
  return <div>${componentName}</div>
}

`
}
