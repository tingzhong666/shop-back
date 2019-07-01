const path = require('path')

let externals = {}

if (process.env.NODE_ENV === 'production') {
  externals = {
    'axios': 'axios',
    'element-ui': 'ELEMENT',
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex'
  }
}

module.exports = {
  configureWebpack: {
    externals
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888'
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'import': ['D:\\web\\projects\\shop-back\\src\\styl\\base.styl']
      }
    }
  },

  publicPath: undefined,
  outputDir: undefined,
  assetsDir: 'public',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
}
