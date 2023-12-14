export const REACT_COMPONENT = (
  name: string
) => `export interface ${name}Props {}

export const ${name} = ({}: ${name}Props) => {
  return <div>${name}</div>
}
`
