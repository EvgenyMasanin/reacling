import boxen from 'boxen'
import { MethodologyEnum } from '@services/config/types'

import type { Options } from 'boxen'

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
  Generate a config file:            config
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
  Generate a component for shared:   su   'component name'
  Generate a component for entity:   eu   'entity name' 'component name' 
  Generate a component for feature:  fu   'feature name' 'component name'
  Generate a config file:            config 
  Get help:                          --help 
  `,
  boxenConfig('FSD react commands')
)

// const reduxCommands = `
//   Generate a store: store
//   `

export const writeHelp = (methodology: MethodologyEnum) => {
  switch (methodology) {
    case MethodologyEnum.simple:
      console.log(REACT_COMMANDS)
      break
    case MethodologyEnum.fsd:
      console.log(FSD_REACT_COMMANDS)
      break
    default:
      break
  }
}
