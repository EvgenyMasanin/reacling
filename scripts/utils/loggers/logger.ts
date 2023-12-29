import boxen from 'boxen'
import chalk from 'chalk'
import { Status } from 'scripts/constants'
import { capitalizeFirst } from '../strings'

export const isSuccess = (status: Status) => status === Status.success

class Logger {
  readonly #successLogs: string[] = []
  readonly #errorLogs: string[] = []
  readonly #commonLogs: string[] = []

  incorrectCommand() {
    this.addErrorLog('Incorrect command! Use reacling --help.')
  }

  addLog(status: Status, log: string) {
    isSuccess(status) ? this.#successLogs.push(log) : this.#errorLogs.push(log)
  }

  addCommonLog(log: string) {
    this.#commonLogs.push(log)
  }

  addErrorLog(log: string) {
    this.addLog(Status.error, log)
  }

  addSuccessLog(log: string) {
    this.addLog(Status.success, log)
  }

  addAlreadyExistLog(name: string, message: string = '') {
    this.addLog(
      Status.error,
      `${chalk.underline.italic(name)} ${message} is already exist!`
    )
  }

  addNotExistLog(name: string, message: string = '') {
    this.addLog(
      Status.error,
      `${chalk.underline.italic(name)} ${message} is not exist!`
    )
  }

  addUnknownCommandLog(command: string) {
    this.addLog(Status.error, `Unknown command "${chalk.italic(command)}"!`)
  }

  #getLogs(status?: Status) {
    if (!status) return this.#commonLogs.join('\n')

    return isSuccess(status)
      ? this.#successLogs.join('\n')
      : this.#errorLogs.join('\n')
  }

  writeLogs() {
    if (this.#successLogs.length > 0) {
      this.#successLog(this.#getLogs(Status.success))
    }
    if (this.#errorLogs.length > 0) {
      this.#errorLog(this.#getLogs(Status.error))
    }
    if (this.#commonLogs.length > 0) {
      console.log(this.#getLogs())
    }
  }

  #errorLog<T extends string>(content: T) {
    console.log(
      boxen(chalk.redBright(`${content}`), {
        title: `${capitalizeFirst(Status.error)}:`,
        padding: { top: 0, bottom: 0, left: 2, right: 0 },
        borderColor: 'red'
      })
    )
  }

  #successLog(content: string) {
    console.log(
      boxen(chalk.greenBright(content), {
        title: `${capitalizeFirst(Status.success)}:`,
        padding: { top: 0, bottom: 0, left: 2, right: 0 },
        borderColor: 'green'
      })
    )
  }
}

export const logger = new Logger()
