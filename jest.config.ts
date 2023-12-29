import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  rootDir: './',
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'scripts']
}

export default config
