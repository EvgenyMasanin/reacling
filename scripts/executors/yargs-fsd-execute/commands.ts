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
import { Command, CommandAlias, Parameter, type CommandConfig } from './types'

const addEntityConfig: CommandConfig = {
  command: Command.entity,
  parameter: Parameter.name,
  alias: CommandAlias.entity,
  describe: 'add new entity',
  handler: entityGenerator
}
const addEntityUIConfig: CommandConfig = {
  command: Command.entityUI,
  parameter: Parameter.full,
  alias: CommandAlias.entityUI,
  describe: 'add new component for entity',
  handler: entityComponentGenerator
}
const addFeatureConfig: CommandConfig = {
  command: Command.feature,
  parameter: Parameter.name,
  alias: CommandAlias.feature,
  describe: 'add new feature',
  handler: featureGenerator
}
const addFeatureUIConfig: CommandConfig = {
  command: Command.featureUI,
  parameter: Parameter.full,
  alias: CommandAlias.featureUI,
  describe: 'add new component for entity',
  handler: featureComponentGenerator
}
const addPageConfig: CommandConfig = {
  command: Command.page,
  parameter: Parameter.name,
  alias: CommandAlias.page,
  describe: 'add new entity',
  handler: pageGenerator
}
const addWidgetConfig: CommandConfig = {
  command: Command.widget,
  parameter: Parameter.name,
  alias: CommandAlias.widget,
  describe: 'add new widget',
  handler: widgetGenerator
}
const addShearedUIConfig: CommandConfig = {
  command: Command.shearedUI,
  parameter: Parameter.full,
  alias: CommandAlias.shearedUI,
  describe: 'add new sheared component',
  handler: shearedComponentGenerator
}

const initConfig: CommandConfig = {
  command: Command.init,
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
