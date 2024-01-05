import chalk from 'chalk'
import PromptSync from 'prompt-sync'

export interface QuestionBody<T extends string = string> {
  message: string
  validAnswers?: T[]
  errMessage?: string
}

export const question = <T extends string>(
  questionBody: QuestionBody<T>
): T => {
  const { message, validAnswers, errMessage } = questionBody

  let answer = PromptSync({ sigint: true })({
    ask: chalk.yellow('? ') + message,
    autocomplete: () => validAnswers
  }) as T | undefined

  if (!validAnswers) return answer || validAnswers[0]

  if (answer && !validAnswers.includes(answer)) {
    console.log(chalk.red(errMessage))
    answer = question(questionBody)
  }

  return answer || validAnswers[0]
}
