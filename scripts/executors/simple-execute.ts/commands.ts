import { entityGenerator } from 'scripts/project-generators/fsd-structure/entity'
import { Command, CommandAlias, Parameter, type CommandConfig } from './types'

const generateComponentConfig: CommandConfig = {
  command: Command.entity,
  parameter: Parameter.name,
  alias: CommandAlias.entity,
  describe: 'add new entity',
  handler: entityGenerator
}
export const commands: CommandConfig[] = [generateComponentConfig] as const
