import boxen from 'boxen'
import { Status } from '@scripts/constants'
import { padding } from '@scripts/constants/index'
import { MISSING_ARGUMENT } from '@scripts/errors/errors'
import { toSingular } from '@utils/strings/to-singular'

import chalk from 'chalk'

import { capitalizeFirst } from '../strings'
import { getHelpMessage } from './write-help'
import { pathTransform } from '../strings/path-transform'

import type { MethodologyEnum } from '@services/config/types'
const isSuccess = (status: Status) => status === Status.success

class Logger {
  readonly #successLogs: string[] = []
  readonly #errorLogs: string[] = []
  readonly #commonLogs: string[] = []

  pushLog(status: Status, log: string, allowBackslash = false) {
    const transformedLog = allowBackslash ? log : pathTransform(log)
    isSuccess(status)
      ? this.#successLogs.push(transformedLog)
      : this.#errorLogs.push(transformedLog)
  }

  pushCommonLog(log: string, allowBackslash = false) {
    this.#commonLogs.push(allowBackslash ? log : pathTransform(log))
  }

  pushErrorLog(log: string, allowBackslash = false) {
    this.pushLog(Status.error, log, allowBackslash)
  }

  pushSuccessLog(log: string, allowBackslash = false) {
    this.pushLog(Status.success, log, allowBackslash)
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
      `${chalk.underline.italic(name)} "${message}" is not exist!`
    )
  }

  pushUnknownCommandLog(command: string) {
    this.pushLog(Status.error, `Unknown command "${chalk.italic(command)}"!`)
  }

  write(message: string) {
    console.log(message)
  }

  writeStartConfigGenerating() {
    this.write(
      chalk.blueBright(
        boxen('Generating config file...', { title: 'Reacling', padding })
      )
    )
  }

  writeHelp(methodology: MethodologyEnum) {
    this.write(getHelpMessage(methodology))
  }

  writeLogs() {
    if (this.#successLogs.length > 0) {
      this.#successLog(this.#getLogs(Status.success))
    }
    if (this.#errorLogs.length > 0) {
      this.#errorLog(this.#getLogs(Status.error))
    }
    if (this.#commonLogs.length > 0) {
      this.write(this.#getLogs())
    }
  }

  #getLogs(status?: Status) {
    if (!status) return this.#commonLogs.join('\n')

    return isSuccess(status)
      ? this.#successLogs.join('\n')
      : this.#errorLogs.join('\n')
  }

  #errorLog<T extends string>(content: T) {
    this.write(
      boxen(chalk.redBright(`${content}`), {
        title: `${capitalizeFirst(Status.error)}:`,
        padding,
        borderColor: 'red'
      })
    )
  }

  #successLog(content: string) {
    this.write(
      boxen(chalk.greenBright(content), {
        title: `${capitalizeFirst(Status.success)}:`,
        padding,
        borderColor: 'green'
      })
    )
  }
}

export const logger = new Logger()
