import { readdirSync } from 'fs'
import { Folder, INDEX, PAGE_FOLDER_PATH } from 'scripts/constants'
import { appendToIndex, createFile, isFileExist, mkdirIfNotExist } from 'utils/file-system'
import { logger } from 'utils/loggers'
import { generatePageContent } from '../content-generators'

export const generatePage = (pageName: string) => {
  mkdirIfNotExist(Folder.src, Folder.pages)

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
