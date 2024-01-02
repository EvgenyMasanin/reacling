import boxen, { type Options } from 'boxen'
import { type Methodology } from 'scripts/services/config/types'

const boxenConfig = (title: string): Options => ({
  title,
  titleAlignment: 'center',
  borderColor: 'blueBright'
})

const REACT_COMMANDS = boxen(
  `
  Generate a component:              c  'component name' 
  Generate a page:                   p  'page name' 
  Generate a hook:                   h  'hook name' 
  Get help:                          --help 
  `,
  boxenConfig('React commands')
)

export const FSD_REACT_COMMANDS = boxen(
  `
  Generate FSD structure:            init
  Generate a page:                   p    'page name' 
  Generate a widget:                 w    'widget name' 
  Generate a entity:                 e    'entity name' 
  Generate a feature:                f    'feature name' 
  Generate a component for sheared:  su   'component name'
  Generate a component for entity:   eu   'entity name' 'component name' 
  Generate a component for feature:  fu   'feature name' 'component name' 
  Get help:                          --help 
  `,
  boxenConfig('FSD react commands')
)

// const reduxCommands = `
//   Generate a store: store
//   `

export const writeHelp = (methodology: Methodology) => {
  switch (methodology) {
    case 'common':
      console.log(REACT_COMMANDS)
      break
    case 'fsd':
      console.log(FSD_REACT_COMMANDS)
      break
    default:
      break
  }
}
