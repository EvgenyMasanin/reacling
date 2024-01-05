import { question } from '../question'
import { getSliceQuestionBody } from './get-slice-question-body'

export const YEAS = 'y'

export const simpleAnswer = ['y', 'n']

export const SIMPLE_ANSWER_ERROR = 'Answer must be "y" or "n"!'

export const entityAnswer = (folderName: string) =>
  question(getSliceQuestionBody('Entity', folderName)) === YEAS

export const featureAnswer = (folderName: string) =>
  question(getSliceQuestionBody('Feature', folderName)) === YEAS

export const pageAnswer = (folderName: string) =>
  question(getSliceQuestionBody('Page', folderName)) === YEAS

export const widgetAnswer = (folderName: string) =>
  question(getSliceQuestionBody('Widget', folderName)) === YEAS
