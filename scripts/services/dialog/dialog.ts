import chalk from 'chalk'
import PromptSync from 'prompt-sync'

export type Answer = 'y' | 'n'

export const question = (message: string): Answer => {
  const validAnswers = ['y', 'n']

  let answer = PromptSync()(chalk.yellow(message)) as Answer

  if (!validAnswers.includes(answer)) {
    console.log(chalk.red('Answer must be "y" or "n"!'))
    answer = question(message)
  }
  return answer
}
