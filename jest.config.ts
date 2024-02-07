import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  rootDir: './',
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^@scripts/(.*)': '<rootDir>/scripts/$1',
    '^@utils/(.*)': '<rootDir>/utils/$1',
    '^@services/(.*)': '<rootDir>/services/$1'
  },
  moduleDirectories: ['node_modules', 'scripts']
}

export default config
