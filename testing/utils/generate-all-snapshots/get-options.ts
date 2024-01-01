import { type Options } from 'yargs'

interface Option {
  optionName: string
  options: Options
}

export const options: Option[] = [
  {
    optionName: 'init',
    options: {
      type: 'boolean',
      alias: 'i',
      describe: 'If "true", generate snapshots for "init" command'
    }
  },
  {
    optionName: 'page',
    options: {
      type: 'boolean',
      alias: 'p',
      describe: 'If "true", generate snapshots for "page" command'
    }
  },
  {
    optionName: 'entity',
    options: {
      type: 'boolean',
      alias: 'e',
      describe: 'If "true", generate snapshots for "entity" command'
    }
  },
  {
    optionName: 'widget',
    options: {
      type: 'boolean',
      alias: 'w',
      describe: 'If "true", generate snapshots for "widget" command'
    }
  },
  {
    optionName: 'feature',
    options: {
      type: 'boolean',
      alias: 'f',
      describe: 'If "true", generate snapshots for "feature" command'
    }
  },
  {
    optionName: 'sheared',
    options: {
      type: 'boolean',
      alias: 's',
      describe: 'If "true", generate snapshots for "sheared" command'
    }
  }
]

export const generateOptions = () =>
  options.reduce((accum, { optionName, options }) => {
    accum[optionName] = options
    return accum
  }, {})
