import { normalizeConsoleOutput } from './normalize-string'

describe('normalizeString', () => {
  it('must normalize console output', () => {
    const inputStr = `┌Success:─────────────────────────────────────────────┐
    │Foldercreated:src/pages/profile.│
    │Foldercreated:src/pages/profile/ui.│
    │Filecreated:src/pages/profile/ui/index.ts.│
    │Foldercreated:src/pages/profile/lib.│
    │Foldercreated:src/pages/profile/lib/hooks.│
    │Foldercreated:src/pages/profile/lib/helpers.│
    │Filecreated:src/pages/profile/lib/hooks/index.ts.│
    │Filecreated:src/pages/profile/lib/helpers/index.ts.│
    │Filecreated:src/pages/profile/ui/profile.tsx.│
    │Filecreated:src/pages/profile/ui/index.ts.│
    │Fileupdated:src/pages/index.ts.│
    └───────────────────────────────────────────────────────┘`
    const outputStr = `Success:
    Foldercreated:src/pages/profile.
    Foldercreated:src/pages/profile/ui.
    Filecreated:src/pages/profile/ui/index.ts.
    Foldercreated:src/pages/profile/lib.
    Foldercreated:src/pages/profile/lib/hooks.
    Foldercreated:src/pages/profile/lib/helpers.
    Filecreated:src/pages/profile/lib/hooks/index.ts.
    Filecreated:src/pages/profile/lib/helpers/index.ts.
    Filecreated:src/pages/profile/ui/profile.tsx.
    Filecreated:src/pages/profile/ui/index.ts.
    Fileupdated:src/pages/index.ts.
    `
    const res = normalizeConsoleOutput(inputStr)
    expect(res).toBe(outputStr)
  })
})
