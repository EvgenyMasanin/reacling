import { execSync } from 'child_process'

export const execScript = (parameters: string) => {
  const script = 'ts-node -r tsconfig-paths/register ./scripts/main.ts'
  return execSync(`${script} ${parameters}`).toString()
}
