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
  command: FsdCommand | SimpleCommand
  parameter?: Parameter
  alias?: FsdCommandAlias | SimpleCommandAlias
  describe?: string
  handler: (name: string, componentName?: string) => void
}

export enum SimpleCommand {
  component = 'c',
  page = 'p',
  hook = 'h'
}

export enum SimpleCommandAlias {
  component = 'component',
  page = 'page',
  hook = 'hook'
}

export type AvailableSimpleCommands = (typeof availableFsdCommands)[number]

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

export const availableSimpleCommands = [
  ...Object.values(SimpleCommand),
  ...Object.values(SimpleCommandAlias)
] as const

export const availableFsdCommands = [
  ...Object.values(FsdCommand),
  ...Object.values(FsdCommandAlias)
] as const

export const allAvailableCommands = [
  ...Object.values(availableFsdCommands),
  ...Object.values(availableSimpleCommands),
  'config'
] as const

export type AvailableFsdCommands = (typeof availableFsdCommands)[number]

export type AllAvailableCommands = (typeof allAvailableCommands)[number]

export type MissingArgumentError = Record<
  Exclude<AllAvailableCommands, 'init' | 'config'>,
  (argumentCount: number) => string
>
