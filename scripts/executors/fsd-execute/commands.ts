import {
  entityComponentGenerator,
  entityGenerator,
  featureComponentGenerator,
  featureGenerator,
  hookGenerator,
  initProject,
  pageGenerator,
  sharedComponentGenerator,
  widgetGenerator
} from '@scripts/project-generators/fsd-structure'

import { FsdCommand, FsdCommandAlias, Parameter } from '../types'

import type { CommandConfig } from '../types'
const addEntityConfig: CommandConfig = {
  command: FsdCommand.entity,
  parameter: Parameter.name,
  alias: FsdCommandAlias.entity,
  describe: 'add new entity',
  handler: entityGenerator
}
const addEntityUIConfig: CommandConfig = {
  command: FsdCommand.entityUI,
  parameter: Parameter.full,
  alias: FsdCommandAlias.entityUI,
  describe: 'add new component for entity',
  handler: entityComponentGenerator
}
const addFeatureConfig: CommandConfig = {
  command: FsdCommand.feature,
  parameter: Parameter.name,
  alias: FsdCommandAlias.feature,
  describe: 'add new feature',
  handler: featureGenerator
}
const addFeatureUIConfig: CommandConfig = {
  command: FsdCommand.featureUI,
  parameter: Parameter.full,
  alias: FsdCommandAlias.featureUI,
  describe: 'add new component for entity',
  handler: featureComponentGenerator
}
const addPageConfig: CommandConfig = {
  command: FsdCommand.page,
  parameter: Parameter.name,
  alias: FsdCommandAlias.page,
  describe: 'add new entity',
  handler: pageGenerator
}
const addWidgetConfig: CommandConfig = {
  command: FsdCommand.widget,
  parameter: Parameter.name,
  alias: FsdCommandAlias.widget,
  describe: 'add new widget',
  handler: widgetGenerator
}
const addSharedUIConfig: CommandConfig = {
  command: FsdCommand.sharedUI,
  parameter: Parameter.name,
  alias: FsdCommandAlias.sharedUI,
  describe: 'add new shared component',
  handler: sharedComponentGenerator
}

const addHookConfig: CommandConfig = {
  command: FsdCommand.hook,
  parameter: '<hookName> <slicePath>',
  alias: FsdCommandAlias.hook,
  describe:
    'add new hook for slice provided by path. For example "entities/user"',
  handler: hookGenerator
}

const initConfig: CommandConfig = {
  command: FsdCommand.init,
  describe: 'Generate initial structure of project.',
  handler: initProject
}

export const commands: CommandConfig[] = [
  addEntityConfig,
  addEntityUIConfig,
  addFeatureConfig,
  addFeatureUIConfig,
  addPageConfig,
  addWidgetConfig,
  addSharedUIConfig,
  addHookConfig,
  initConfig
] as const
