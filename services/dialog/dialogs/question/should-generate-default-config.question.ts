import { createPrompt } from '@utils/inquirer/create-prompt'

export async function shouldGenerateDefaultConfigQuestion() {
  const prompt = await createPrompt()

  const { shouldGenerate } = await prompt<{ shouldGenerate: boolean }>([
    {
      name: 'shouldGenerate',
      message: 'Generate default config:',
      type: 'confirm'
    }
  ])

  return shouldGenerate
}
