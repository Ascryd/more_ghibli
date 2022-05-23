const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_main.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/More_Ghibli/" : "/",
}