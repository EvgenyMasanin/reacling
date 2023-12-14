import boxen from 'boxen'
import chalk from 'chalk'
import { Status } from 'scripts/constants'
import { upFirst } from '../strings'

export const successLog = (content: string) => {
  console.log(
    chalk.green(
      boxen(content, {
        title: `${upFirst(Status.success)}:`,
        padding: { top: 0, bottom: 0, left: 2, right: 0 }
      })
    )
  )
}
