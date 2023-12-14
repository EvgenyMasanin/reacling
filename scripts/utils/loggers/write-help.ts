import boxen from 'boxen'
import { type WriteHelp } from 'scripts/types'

const REACT_COMMANDS = `
  Generate a component:              c  'component name' 
  Generate a page:                   p  'page name' 
  Generate a hook:                   h  'hook name' 
  Generate a feature:                f  'feature name' 
  Generate a hook for feature:       fh 'hook name' 
  Generate a component for feature:  fc 'component name' 
  `

// const reduxCommands = `
//   Generate a store: store
//   `

export const writeHelp: WriteHelp = () => {
  console.log(
    boxen(REACT_COMMANDS, {
      title: 'React commands',
      titleAlignment: 'center',
      borderColor: 'blueBright'
    })
  )
  // console.log(
  //   boxen(reduxCommands, {
  //     title: 'Redux commands',
  //     titleAlignment: 'center',
  //     borderColor: 'magentaBright',
  //   })
  // )
}
