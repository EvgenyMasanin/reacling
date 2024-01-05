import { type QuestionBody } from '../question'
import { SIMPLE_ANSWER_ERROR, simpleAnswer } from './answers'

export const getSliceQuestionBody = (
  sliceName: string,
  folderName: string
): QuestionBody => ({
  message: `Generate ${sliceName} with "${folderName}" folder y/n: `,
  validAnswers: simpleAnswer,
  errMessage: SIMPLE_ANSWER_ERROR
})
