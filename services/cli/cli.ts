import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import type { AvailableFsdCommands } from '@scripts/executors/types'

const args = hideBin(process.argv)

export const cli = {
  yargs,
  args,
  inputCommand: args[0] as AvailableFsdCommands
}
