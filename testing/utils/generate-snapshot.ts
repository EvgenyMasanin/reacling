import yargs from 'yargs'
import { join } from 'path'
import { mkdirSync, writeFileSync } from 'fs'

import { execSync } from 'child_process'

import { readPackageJson } from './readPackageJson'
import { normalizeConsoleOutput } from './normalize-string'

import type { Argv } from 'yargs'

interface InputArguments {
  folder: string
  fileName: string
  parameters: string
}

yargs
  .scriptName('snapshot')
  .usage('usage: $0 <command>')
  .command<InputArguments>({
    command: 'g <folder> <fileName> <parameters>',
    aliases: 'generate',
    builder: (argv: Argv<InputArguments>) => {
      argv
        .positional('folder', {
          describe: 'folder name'
        })
        .positional('fileName', {
          describe: 'file name'
        })
        .positional('parameters', {
          describe: 'any number of parameters'
        })
        .usage('Usage: $0 g entity new-entity e user')

      return argv
    },
    describe: 'Generate snapshot of reacling console output.',

    handler: (props) => {
      const { _, fileName, folder, parameters } = props
      generateSnapshot({
        folder,
        fileName,
        parameters: [parameters, ..._.slice(1)].join(' ')
      })
    }
  })
yargs.parseSync()

interface GenerateSnapshotProps {
  folder: string
  fileName: string
  parameters: string
}

function generateSnapshot({
  folder,
  fileName,
  parameters
}: GenerateSnapshotProps) {
  const snapshotsFolderPath = join('testing', 'snapshots', folder)
  execSync(readPackageJson().scripts.build)

  const consoleOutput = execSync(
    `${readPackageJson().scripts['prod:reacling']} ${parameters}`
  ).toString()

  try {
    mkdirSync(snapshotsFolderPath)
  } catch {}

  writeFileSync(
    join(snapshotsFolderPath, `${fileName}.txt`),
    normalizeConsoleOutput(consoleOutput)
  )
}
