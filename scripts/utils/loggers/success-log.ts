import boxen from 'boxen'
import chalk from 'chalk'

export const successLog = (content: string) => {
  console.log(
    chalk.green(
      boxen(content, {
        title: 'Success',
        padding: { top: 0, bottom: 0, left: 2, right: 0 }
      })
    )
  )
}
