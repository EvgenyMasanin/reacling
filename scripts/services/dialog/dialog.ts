import { config } from '../config'
import { type ReaclingConfig } from '../config/types'
import {
  SIMPLE_ANSWER_ERROR,
  YEAS,
  entityAnswer,
  featureAnswer,
  pageAnswer,
  simpleAnswer,
  widgetAnswer
} from './helpers/answers'
import { askAboutStructure } from './helpers/ask-about-structure'
import { getSliceQuestionBody } from './helpers/get-slice-question-body'
import { isProvideOwnStructure } from './helpers/is-provide-own-structure'
import { question } from './question'

export const dialog = (): ReaclingConfig => {
  const { fsdStructure } = config.defaultConfig

  const isDefault =
    question({
      message: 'Generate default config y/n: ',
      validAnswers: simpleAnswer,
      errMessage: SIMPLE_ANSWER_ERROR
    }) === YEAS

  if (isDefault) {
    return config.defaultConfig
  }

  const methodology = question({
    message: 'Witch methodology you prefer fsd/common("fsd" by default): ',
    validAnswers: ['fsd', 'common'],
    errMessage: 'You must provide "fsd" or "common" methodology!'
  })

  if (methodology === 'common') {
    return { methodology }
  }

  const appStructureConfig = isProvideOwnStructure('app')
    ? {
        withProviders:
          question(getSliceQuestionBody('app', 'providers')) === YEAS
      }
    : fsdStructure.app

  const entityStructureConfig = isProvideOwnStructure('entity')
    ? askAboutStructure(entityAnswer)
    : fsdStructure.entities

  const featureStructureConfig = isProvideOwnStructure('feature')
    ? askAboutStructure(featureAnswer)
    : fsdStructure.features

  const pageStructureConfig = isProvideOwnStructure('page')
    ? askAboutStructure(pageAnswer)
    : fsdStructure.pages

  const widgetStructureConfig = isProvideOwnStructure('widget')
    ? askAboutStructure(widgetAnswer)
    : fsdStructure.widgets

  return {
    methodology: 'fsd',
    fsdStructure: {
      app: appStructureConfig,
      entities: entityStructureConfig,
      features: featureStructureConfig,
      pages: pageStructureConfig,
      widgets: widgetStructureConfig
    }
  }
}
