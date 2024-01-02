import {
  entityComponentGenerator,
  entityGenerator
} from 'scripts/project-generators/fsd-structure/entity'
import {
  featureComponentGenerator,
  featureGenerator
} from 'scripts/project-generators/fsd-structure/feature'
import { initProject } from 'scripts/project-generators/fsd-structure/init-project'
import { pageGenerator } from 'scripts/project-generators/fsd-structure/page-generator'
import { shearedComponentGenerator } from 'scripts/project-generators/fsd-structure/sheared-component-generator'
import { widgetGenerator } from 'scripts/project-generators/fsd-structure/widget-generator'
import {
  FsdCommand,
  FsdCommandAlias,
  Parameter,
  type CommandConfig
} from './types'

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
const addShearedUIConfig: CommandConfig = {
  command: FsdCommand.shearedUI,
  parameter: Parameter.name,
  alias: FsdCommandAlias.shearedUI,
  describe: 'add new sheared component',
  handler: shearedComponentGenerator
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
  addShearedUIConfig,
  initConfig
] as const
