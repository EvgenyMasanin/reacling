import { Status } from 'scripts/constants'
import { errorLog } from './error-log'
import { successLog } from './success-log'

export const isSuccess = (status: Status) => status === Status.success

class Logger {
  readonly #successLogs: string[] = []
  readonly #errorLogs: string[] = []

  addLog(status: Status, log: string) {
    isSuccess(status) ? this.#successLogs.push(log) : this.#errorLogs.push(log)
  }

  #getLogs(status: Status) {
    return isSuccess(status)
      ? this.#successLogs.join('\n')
      : this.#errorLogs.join('\n')
  }

  writeLogs() {
    if (this.#successLogs.length > 0) successLog(this.#getLogs(Status.success))
    if (this.#errorLogs.length > 0) errorLog(this.#getLogs(Status.error))
  }
}

export const logger = new Logger()
