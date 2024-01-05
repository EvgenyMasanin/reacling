import {
  entityCommands,
  featureCommands,
  initCommands,
  pageCommands,
  shearedCommands,
  widgetCommands
} from 'testing/commands'
import { componentCommands } from 'testing/commands/component'
import { hookCommands } from 'testing/commands/hook'

const fsdCommandsNumber =
  entityCommands.length +
  featureCommands.length +
  initCommands.length +
  pageCommands.length +
  shearedCommands.length +
  widgetCommands.length

const simpleCommandsNumber =
  componentCommands.length + hookCommands.length + pageCommands.length

const allCommandsNumber = fsdCommandsNumber + simpleCommandsNumber

export const progressPercents = {
  all: 100 / (allCommandsNumber - 1),
  fsd: 100 / fsdCommandsNumber,
  simple: 100 / simpleCommandsNumber
}
