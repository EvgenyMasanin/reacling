export type WriteHelp = () => void

export type GeneratePage = (pageName: string) => void
export type GenerateFeature = (featureName: string) => void
export type GenerateHook = (hookName: string, path?: string) => void
export type GenerateComponent = (componentName: string, path?: string) => void
export type GenerateFeatureComponent = (
  featureName: string,
  componentName: string
) => void
export type GenerateFeatureHook = (
  featureName: string,
  hookName: string
) => void

export type Handler =
  | WriteHelp
  | GeneratePage
  | GenerateHook
  | GenerateFeature
  | GenerateComponent
  | GenerateFeatureHook
  | GenerateFeatureComponent

const commands = ['c', 'p', 'f', 'h', 'fc', 'fh', 'store', '--help'] as const

export type Command = (typeof commands)[number]
