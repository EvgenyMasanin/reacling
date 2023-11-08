import boxen from 'boxen'
import chalk from 'chalk'

export const errorLog = <T extends string>(content: T) => {
  console.log(
    chalk.red(
      boxen(`${content}`, {
        title: 'Error:',
        padding: { top: 0, bottom: 0, left: 2, right: 0 }
      })
    )
  )
}
