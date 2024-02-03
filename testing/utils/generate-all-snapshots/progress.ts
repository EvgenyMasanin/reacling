import boxen from 'boxen'
import { padding } from '@scripts/constants/index'

import chalk from 'chalk'

class Progress {
  readonly empty = '▯'
  readonly nonEmpty = chalk.green('▮')

  readonly progressBarLength = 50

  #progressPoints = 0

  #progressBar = Array(this.progressBarLength).fill(this.empty)

  #percentProgress = 0

  get progressBar() {
    return `[${this.#progressBar.join('')} ${this.percentProgress}]`
  }

  get percentProgress() {
    return chalk.green(`${this.#percentProgress.toFixed(2)}%`)
  }

  increaseProgress(percent: number) {
    this.#percentProgress += percent

    this.#progressPoints += (percent * this.progressBarLength) / 100

    this.#progressBar = this.#progressBar.map((_, i) =>
      i < this.#progressPoints ? this.nonEmpty : this.empty
    )
  }

  increaseProgressAndShow(percent: number) {
    this.increaseProgress(percent)
    this.writeToConsole()
  }

  writeToConsole() {
    if (this.#progressPoints === 0) {
      process.stdout.write('\n\n\n')
    }
    process.stdout.write('\x1B[?25l')
    process.stdout.cursorTo(0)
    process.stdout.clearLine(0)
    process.stdout.moveCursor(0, -1)
    process.stdout.cursorTo(0)
    process.stdout.clearLine(0)
    process.stdout.moveCursor(0, -1)
    process.stdout.cursorTo(0)
    process.stdout.clearLine(0)

    process.stdout.write(
      boxen(this.progressBar, {
        title: chalk.blue('Snapshot progress: '),
        padding
      })
    )
  }

  finish() {
    process.stdout.moveCursor(0, -3)
    process.stdout.clearScreenDown()
    process.stdout.write('\x1B[?25h')
    process.stdout.write('\n')
    console.log(chalk.blue(boxen('🚀 Finished! 🚀')))
  }
}

export const progress = new Progress()
