// https://github.com/nklayman/vue-cli-plugin-electron-builder/blob/master/docs/guide/configuration.md#webpack-configuration
module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessWatch: ['src/components/*.ts']
    }
  }
}
