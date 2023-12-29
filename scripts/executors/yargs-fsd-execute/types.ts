export interface InputParameters {
  name: string
  componentName: string
}

export type NameParameter = Pick<InputParameters, 'name'>

export enum Parameter {
  full = '<name> <componentName>',
  name = '<name>'
}

export interface CommandConfig {
  command: Command
  parameter?: Parameter
  alias?: CommandAlias
  describe?: string
  handler: (name: string, componentName?: string) => void
}

export enum Command {
  init = 'init',
  entity = 'e',
  feature = 'f',
  page = 'p',
  widget = 'w',
  entityUI = 'eu',
  featureUI = 'fu',
  shearedUI = 'su'
}

export enum CommandAlias {
  entity = 'entity',
  feature = 'feature',
  page = 'page',
  widget = 'widget',
  entityUI = 'entity-ui',
  featureUI = 'feature-ui',
  shearedUI = 'sheared-ui'
}

export const availableCommands = [
  ...Object.values(Command),
  ...Object.values(CommandAlias)
]

export type AvailableCommands = (typeof availableCommands)[number]
