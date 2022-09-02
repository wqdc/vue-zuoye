const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const cpns = path.join(__dirname, './src/components')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack:{
    devServer:{
      open:true,
      port:3000,
      host:'127.0.0.1'
    },
    resolve:{
      alias:{
        cpns
      }
    }
  }
})
