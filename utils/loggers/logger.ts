import boxen from 'boxen'
import { Status } from '@scripts/constants'
import { padding } from '@scripts/constants/index'
import { MISSING_ARGUMENT } from '@scripts/errors/errors'
import { toSingular } from '@utils/strings/to-singular'

import chalk from 'chalk'

import { writeHelp } from './write-help'
import { capitalizeFirst } from '../strings'
import { pathTransform } from '../strings/path-transform'

import type { MethodologyEnum } from '@services/config/types'
const isSuccess = (status: Status) => status === Status.success

class Logger {
  readonly #successLogs: string[] = []
  readonly #errorLogs: string[] = []
  readonly #commonLogs: string[] = []

  pushLog(status: Status, log: string) {
    const transformedLog = pathTransform(log)
    isSuccess(status)
      ? this.#successLogs.push(transformedLog)
      : this.#errorLogs.push(transformedLog)
  }

  pushCommonLog(log: string) {
    this.#commonLogs.push(pathTransform(log))
  }

  pushErrorLog(log: string) {
    this.pushLog(Status.error, log)
  }

  pushSuccessLog(log: string) {
    this.pushLog(Status.success, log)
  }

  pushMissingArguments(...args: string[]) {
    const isMany = args.length > 1
    const message = `${MISSING_ARGUMENT}${isMany ? 's' : ''}: ${args.join(', ')}`
    this.pushErrorLog(message)
  }

  pushAlreadyExistLog(name: string, message: string = '') {
    this.pushLog(
      Status.error,
      `${chalk.underline.italic(name)} ${toSingular(message)} is already exist!`
    )
  }

  pushNotExistLog(name: string, message: string = '') {
    this.pushLog(
      Status.error,
      `${chalk.underline.italic(name)} ${message} is not exist!`
    )
  }

  pushUnknownCommandLog(command: string) {
    this.pushLog(Status.error, `Unknown command "${chalk.italic(command)}"!`)
  }

  writeHelp(methodology: MethodologyEnum) {
    writeHelp(methodology)
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

  #getLogs(status?: Status) {
    if (!status) return this.#commonLogs.join('\n')

    return isSuccess(status)
      ? this.#successLogs.join('\n')
      : this.#errorLogs.join('\n')
  }

  #errorLog<T extends string>(content: T) {
    console.log(
      boxen(chalk.redBright(`${content}`), {
        title: `${capitalizeFirst(Status.error)}:`,
        padding,
        borderColor: 'red'
      })
    )
  }

  #successLog(content: string) {
    console.log(
      boxen(chalk.greenBright(content), {
        title: `${capitalizeFirst(Status.success)}:`,
        padding,
        borderColor: 'green'
      })
    )
  }
}

export const logger = new Logger()
