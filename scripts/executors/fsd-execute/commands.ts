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
  builder: (argv) =>
    argv
      .usage(
        'Usage: $0 eu <name> <componentName>\nAlso can be used with shortcut. Example: $0 eu user/avatar'
      )
      .positional('name', { describe: 'Name of entity', type: 'string' })
      .positional('componentName', {
        describe: 'Name of component',
        type: 'string'
      })
      .example([
        ['name', 'user'],
        ['componentName', 'avatar']
      ]),
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
  builder: (argv) =>
    argv
      .usage(
        'Usage: $0 fu <name> <componentName>\nAlso can be used with shortcut. Example: $0 fu follow/follow-button'
      )
      .positional('name', { describe: 'Name of feature', type: 'string' })
      .positional('componentName', {
        describe: 'Name of component',
        type: 'string'
      })
      .example([
        ['name', 'follow'],
        ['componentName', 'follow-button']
      ]),
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
  describe: 'Add new hook for slice provided by path.',
  builder: (argv) =>
    argv
      .usage('Usage: $0 h <hookName> <slicePath>')
      .positional('hookName', {
        describe: 'Name of new hook.',
        type: 'string'
      })
      .positional('slicePath', {
        describe: 'Path to slice.',
        type: 'string'
      })
      .example([
        ['hookName', 'use-user'],
        ['slicePath', 'entity/user']
      ]),
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
