import boxen from 'boxen'
import chalk from 'chalk'

export const writeParamsError = () => {
  console.log(
    chalk.red(
      boxen(chalk.redBright("Generate all snapshot doesn't take any params!"), {
        title: 'Error:',
        padding: { top: 0, bottom: 0, left: 2, right: 0 }
      })
    )
  )
}
