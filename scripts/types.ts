export interface SliceStructure {
  withApi?: boolean
  withAssets?: boolean
  withConfig?: boolean
  withLib?: boolean
  withTypes?: boolean
  withUi?: boolean
  withModel?: boolean
}

export type Methodology = 'common' | 'fsd'

export interface ReaclingConfig {
  methodology?: Methodology
  fsdStructure: {
    app?: {
      withProviders?: boolean
    }
    entities?: SliceStructure
    features?: SliceStructure
    widgets?: SliceStructure
    pages?: SliceStructure
  }
}

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

export const commonCommands = [
  'c',
  'p',
  'f',
  'h',
  'fc',
  'fh',
  'store',
  '--help'
] as const

export type CommonCommand = (typeof commonCommands)[number]

export const fsdCommands = [
  'init',
  'p',
  'f',
  'fu',
  'e',
  'eu',
  'w',
  'su',
  '--help'
] as const

export type FsdCommands = (typeof fsdCommands)[number]
