export async function createPrompt() {
  return (await import('inquirer')).default.prompt
}
