import {
  entityCommands,
  featureCommands,
  fsdHookCommands,
  initCommands,
  pageCommands,
  sharedCommands,
  widgetCommands
} from 'testing/commands'
import { hookCommands } from 'testing/commands/hook'
import { componentCommands } from 'testing/commands/component'

const fsdCommandsNumber =
  entityCommands.length +
  featureCommands.length +
  initCommands.length +
  pageCommands.length +
  sharedCommands.length +
  widgetCommands.length +
  fsdHookCommands.length

const simpleCommandsNumber =
  componentCommands.length + hookCommands.length + pageCommands.length

const allCommandsNumber = fsdCommandsNumber + simpleCommandsNumber

export const progressPercents = {
  all: 100 / (allCommandsNumber - 1),
  fsd: 100 / fsdCommandsNumber,
  simple: 100 / simpleCommandsNumber
}
