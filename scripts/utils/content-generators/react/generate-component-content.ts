import { toCamelCase } from 'scripts/utils'

export const generateComponentContent = (name: string) => {
  const componentName = toCamelCase(name)

  return `import { VFC } from 'react'

export interface ${componentName}Props {}

export const ${componentName}: VFC<${componentName}Props> = ({}) => {
  return <div>${componentName}</div>
}

`
}
