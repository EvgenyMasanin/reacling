import { join } from 'path'
/* eslint-disable @typescript-eslint/no-floating-promises */

import { rmSync } from 'fs'
import { equalConsoleOutput } from 'tests/utils/equal-console-output'
import { execScript } from 'tests/utils/exec-script'
import { readSnapshot } from 'tests/utils/read-snapshot'
import { Folder } from './constants'

describe('entity', () => {
  let consoleOutput: string
  beforeAll(() => {
    consoleOutput = execScript('e user')
  })
  afterAll(() => {
    rmSync(join(Folder.src, Folder.entities, 'user'), {
      recursive: true,
      force: true
    })
  })

  it('new entity', () => {
    const snapshot = readSnapshot('entity', 'new-entity')

    equalConsoleOutput(consoleOutput, snapshot)
  })

  it('entity already exist', () => {
    consoleOutput = execScript('e user')

    const snapshot = readSnapshot('entity', 'entity-already-exist')

    equalConsoleOutput(consoleOutput, snapshot)
  })

  it('new component', () => {
    const snapshot = readSnapshot('entity', 'new-component')

    consoleOutput = execScript('eu user avatar')

    equalConsoleOutput(consoleOutput, snapshot)
  })

  it('component already exist', () => {
    const snapshot = readSnapshot('entity', 'component-already-exist')

    consoleOutput = execScript('eu user avatar')

    equalConsoleOutput(consoleOutput, snapshot)
  })

  it('missing arguments', () => {
    const snapshot = readSnapshot('entity', 'missing-arguments')

    consoleOutput = execScript('eu')

    equalConsoleOutput(consoleOutput, snapshot)
  })

  it('missing component name', () => {
    const snapshot = readSnapshot('entity', 'missing-component-name')

    consoleOutput = execScript('eu user')

    equalConsoleOutput(consoleOutput, snapshot)
  })

  it('entity is not exist', () => {
    const snapshot = readSnapshot('entity', 'entity-is-not-exist')

    consoleOutput = execScript('eu usr user-card')

    equalConsoleOutput(consoleOutput, snapshot)
  })
})
