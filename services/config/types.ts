export interface SliceStructure {
  withApi?: boolean
  withAssets?: boolean
  withConfig?: boolean
  withLib?: boolean
  withTypes?: boolean
  withUi?: boolean
  withModel?: boolean
}

export enum MethodologyEnum {
  simple = 'simple',
  fsd = 'fsd'
}

export interface ReaclingConfig {
  methodology?: MethodologyEnum
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
