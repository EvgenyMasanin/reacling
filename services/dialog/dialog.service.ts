import { askAboutConfiguration } from './dialogs'

class DialogService {
  async askAboutConfiguration() {
    return await askAboutConfiguration()
  }
}

export const dialogService = new DialogService()
