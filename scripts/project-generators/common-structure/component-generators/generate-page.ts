import { readdirSync } from 'fs'
import { Folders, INDEX, PAGE_FOLDER_PATH } from 'scripts/constants'
import { type GeneratePage } from 'scripts/types'
import {
  appendToIndex,
  createFile,
  mkdirIfNotExist
} from 'scripts/utils/file-system'
import { logger } from 'scripts/utils/loggers'
import { isFileExist } from 'scripts/utils/predicates'
import { generatePageContent } from '../content-generators'

export const generatePage: GeneratePage = (pageName) => {
  mkdirIfNotExist(Folders.src, Folders.pages)

  if (isFileExist(PAGE_FOLDER_PATH, `${pageName}.tsx`)) {
    logger.addAlreadyExistLog(pageName, 'page')
    return
  }

  createFile(PAGE_FOLDER_PATH, `${pageName}.tsx`, generatePageContent(pageName))

  const files = readdirSync(PAGE_FOLDER_PATH)
  if (files.includes(INDEX)) {
    appendToIndex(PAGE_FOLDER_PATH, pageName)
  } else {
    createFile(PAGE_FOLDER_PATH, INDEX, `export * from './${pageName}'\n`)
  }
}
