import { errorLog } from './error-log'
import { successLog } from './success-log'

type LogType = 'success' | 'error'

export const isSuccess = (type: LogType) => type === 'success'

class Logger {
  readonly #successLogs: string[] = []
  readonly #errorLogs: string[] = []

  addLog(type: LogType, log: string) {
    isSuccess(type) ? this.#successLogs.push(log) : this.#errorLogs.push(log)
  }

  #getLogs(type: LogType) {
    return isSuccess(type)
      ? this.#successLogs.join('\n')
      : this.#errorLogs.join('\n')
  }

  writeLogs() {
    if (this.#successLogs.length > 0) successLog(this.#getLogs('success'))
    if (this.#errorLogs.length > 0) errorLog(this.#getLogs('error'))
  }
}

export const logger = new Logger()
