import { writeFeatureError } from '../loggers/write-feature-error'

export function isCorrectCommandsNumber(command: 'fc' | 'fh') {
  const commandsNumber = process.argv.length - 2

  const isCorrect = commandsNumber >= 3

  if (!isCorrect) {
    writeFeatureError(command)
    return isCorrect
  }

  return isCorrect
}
