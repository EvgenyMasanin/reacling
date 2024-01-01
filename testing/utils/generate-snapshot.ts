import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { join } from 'path'
import yargs, { type Argv } from 'yargs'
import { normalizeString } from './normalize-string'

interface InputArguments {
  folder: string
  fileName: string
  parameters: string
}

yargs
  .scriptName('snapshot')
  .usage('usage: $0 <command>')
  // .fail((props) => {
  //   console.log('🚀 ~ .wrap ~ props:', props)
  // })
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
  console.log('🚀 ~ folder:', folder, fileName, parameters)
  const snapshotsFolderPath = join('testing', 'snapshots', folder)

  const consoleOutput = execSync(
    `ts-node -r tsconfig-paths/register ./scripts/main.ts ${parameters}`
  ).toString()

  writeFileSync(
    join(snapshotsFolderPath, `${fileName}.txt`),
    normalizeString(consoleOutput)
  )
}
