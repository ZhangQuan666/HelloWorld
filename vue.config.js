module.exports = {
  productionSourceMap: false,
  lintOnSave: true,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {}
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
    // proxy: {
    //   '/api': {
    //     target: 'http://api-big-screen.outest.imagiclouds.com',
    //     changeOrigin: true
    //   },
    //   '/socket.io': {
    //     target: 'http://api-big-screen.outest.imagiclouds.com',
    //     changeOrigin: true,
    //     ws: true
    //   }
    // }
  }
}
