import boxen from 'boxen'
import chalk from 'chalk'
import { upFirst } from '../strings'
import { Status } from 'scripts/constants'

export const errorLog = <T extends string>(content: T) => {
  console.log(
    chalk.red(
      boxen(`${content}`, {
        title: `${upFirst(Status.error)}:`,
        padding: { top: 0, bottom: 0, left: 2, right: 0 }
      })
    )
  )
}
