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
  fsdStructure?: {
    app?: {
      withProviders?: boolean
    }
    entities?: SliceStructure
    features?: SliceStructure
    widgets?: SliceStructure
    pages?: SliceStructure
  }
}
