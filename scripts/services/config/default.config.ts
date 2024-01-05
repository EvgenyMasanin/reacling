import { type ReaclingConfig } from './types'

export const defaultConfig: ReaclingConfig = {
  methodology: 'fsd',
  fsdStructure: {
    app: {
      withProviders: true
    },
    pages: {
      withLib: true,
      withUi: true
    },
    widgets: {
      withLib: true,
      withUi: true
    },
    features: {
      withApi: true,
      withLib: true,
      withModel: true,
      withUi: true
    },
    entities: {
      withApi: true,
      withLib: true,
      withModel: true,
      withUi: true
    }
  }
}
