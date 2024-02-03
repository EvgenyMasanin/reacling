import boxen from 'boxen'
import { padding } from '@scripts/constants/index'

import chalk from 'chalk'

export const writeParamsError = () => {
  console.log(
    chalk.red(
      boxen(chalk.redBright("Generate all snapshot doesn't take any params!"), {
        title: 'Error:',
        padding
      })
    )
  )
}
