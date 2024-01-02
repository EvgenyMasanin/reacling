import { type AvailableFsdCommands } from 'scripts/executors/types'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const args = hideBin(process.argv)

export const cli = {
  yargs,
  args,
  inputCommand: args[0] as AvailableFsdCommands
}
