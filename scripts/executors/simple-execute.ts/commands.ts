import {
  generateComponent,
  generateHook,
  generatePage
} from 'scripts/project-generators/common-structure/component-generators'
import {
  Parameter,
  SimpleCommand,
  SimpleCommandAlias,
  type CommandConfig
} from '../types'

const generateComponentConfig: CommandConfig = {
  command: SimpleCommand.component,
  parameter: Parameter.name,
  alias: SimpleCommandAlias.component,
  describe: 'add new component',
  handler: generateComponent
}

const generatePageConfig: CommandConfig = {
  command: SimpleCommand.page,
  parameter: Parameter.name,
  alias: SimpleCommandAlias.page,
  describe: 'add new page',
  handler: generatePage
}

const generateHookConfig: CommandConfig = {
  command: SimpleCommand.hook,
  parameter: Parameter.name,
  alias: SimpleCommandAlias.hook,
  describe: 'add new hook',
  handler: generateHook
}

export const commands: CommandConfig[] = [
  generateComponentConfig,
  generatePageConfig,
  generateHookConfig
] as const
