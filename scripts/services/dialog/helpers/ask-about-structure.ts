export const askAboutStructure = (answer: (folderName: string) => boolean) => {
  return {
    withApi: answer('api'),
    withLib: answer('lib'),
    withUi: answer('ui'),
    withModel: answer('model'),
    withAssets: answer('assets'),
    withConfig: answer('config'),
    withTypes: answer('types')
  }
}
