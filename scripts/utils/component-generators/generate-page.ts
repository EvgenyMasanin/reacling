import { readdirSync } from 'fs'
import {
  appendToIndex,
  createFile,
  generatePageContent,
  isFileExist,
  mkdirIfNotExist
} from '..'
import { logger } from '../loggers/logger'
import { Folders, PAGE_FOLDER_PATH, INDEX } from 'scripts/constants'
import { type GeneratePage } from 'scripts/types'

export const generatePage: GeneratePage = (pageName) => {
  mkdirIfNotExist(Folders.src, Folders.pages)

  if (isFileExist(PAGE_FOLDER_PATH, `${pageName}.tsx`)) {
    logger.addLog('error', `Page '${pageName}' is already exist!`)
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
