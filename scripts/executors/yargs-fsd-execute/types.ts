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
  command: FsdCommand
  parameter?: Parameter
  alias?: FsdCommandAlias
  describe?: string
  handler: (name: string, componentName?: string) => void
}

export enum SimpleCommand {
  component = 'c',
  page = 'p',
  hook = 'h'
}

export enum FsdCommand {
  init = 'init',
  entity = 'e',
  feature = 'f',
  page = 'p',
  widget = 'w',
  entityUI = 'eu',
  featureUI = 'fu',
  shearedUI = 'su'
}

export enum FsdCommandAlias {
  entity = 'entity',
  feature = 'feature',
  page = 'page',
  widget = 'widget',
  entityUI = 'entity-ui',
  featureUI = 'feature-ui',
  shearedUI = 'sheared-ui'
}

export const availableFsdCommands = [
  ...Object.values(FsdCommand),
  ...Object.values(FsdCommandAlias)
]

export type AvailableFsdCommands = (typeof availableFsdCommands)[number]

export type MissingFsdArgumentError = Record<
  Exclude<AvailableFsdCommands, 'init'>,
  (argumentCount: number) => string
>
