import { MethodologyEnum } from '@services/config/types'
import { createPrompt } from '@utils/inquirer/create-prompt'

export async function witchMethodologyQuestion() {
  const prompt = await createPrompt()

  const { methodology } = await prompt<{ methodology: MethodologyEnum }>([
    {
      name: 'methodology',
      message: 'Witch methodology you prefer:',
      type: 'list',
      choices: [MethodologyEnum.fsd, MethodologyEnum.simple]
    }
  ])

  return methodology
}
