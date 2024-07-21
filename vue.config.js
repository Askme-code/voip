const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
})
