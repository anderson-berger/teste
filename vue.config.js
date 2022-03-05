const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({ 
  outputDir: "docs", publicPath: "/teste",
  transpileDependencies: true
})
