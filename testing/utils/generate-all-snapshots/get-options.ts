import type { Argv } from 'yargs'

export const generateOptions = (yargs: Argv) =>
  yargs
    .options({
      init: {
        type: 'boolean',
        alias: 'i',
        describe: 'If "true", generate snapshots for "init" command'
      },

      page: {
        type: 'boolean',
        alias: 'p',
        describe: 'If "true", generate snapshots for "page" command'
      },

      entity: {
        type: 'boolean',
        alias: 'e',
        describe: 'If "true", generate snapshots for "entity" command'
      },

      widget: {
        type: 'boolean',
        alias: 'w',
        describe: 'If "true", generate snapshots for "widget" command'
      },

      feature: {
        type: 'boolean',
        alias: 'f',
        describe: 'If "true", generate snapshots for "feature" command'
      },

      shared: {
        type: 'boolean',
        alias: 's',
        describe: 'If "true", generate snapshots for "shared" command'
      },
      component: {
        type: 'boolean',
        alias: 's',
        describe: 'If "true", generate snapshots for "component" command'
      },
      hook: {
        type: 'boolean',
        alias: 's',
        describe: 'If "true", generate snapshots for "hook" command'
      },
      methodology: {
        type: 'string',
        alias: 'm',
        default: 'all',
        describe: `Provide: 
        "all" to generate all snapshots,
        "fsd" to generate snapshots for "fsd" structure,
        "simple" to generate snapshots for "simple" structure.`
      }
    })
    .parseSync()
