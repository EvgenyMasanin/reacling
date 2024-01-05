import { question } from '../question'
import { SIMPLE_ANSWER_ERROR, YEAS, simpleAnswer } from './answers'

export const isProvideOwnStructure = (sliceName: string) => {
  return (
    question({
      message: `Provide your own structure for ${sliceName} y/n: `,
      validAnswers: simpleAnswer,
      errMessage: SIMPLE_ANSWER_ERROR
    }) === YEAS
  )
}
