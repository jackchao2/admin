// const webpack = require("webpack");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    // baseUrl:"./" ,
    publicPath: process.env.NODE_ENV === 'production' //如果为生产环境就怎么怎么的 
    ? './'
    : '/',
    // 输出文件目录
    outputDir: 'dist',
    // 打包后生成的放置css js的文件名称
    assetsDir: "static",
    //指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
    filenameHashing: true,
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: true, //关键点在这
    // compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
      config.resolve.alias.set('@', resolve('src'))//配置@符号
      // config
      //       .plugin('webpack-bundle-analyzer')
      //       .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    },
    configureWebpack:{
      // plugins: [
      // ]
      // optimization: {
      //   minimizer: [
      //     new UglifyJsPlugin({
      //       uglifyOptions: {
      //         compress: {
      //           warnings: false,
      //           drop_console: true, // console
      //           drop_debugger: false,
      //           pure_funcs: ['console.log'] // 移除console
      //         }
      //       }
      //     })
      //   ]
      // }
    },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
     sourceMap: false,
     loaderOptions: {
       css: {},
       less: {
          // paths: `@import "~@/assets/index.less"`   注意 此处可以配置别名 @/ === src/
       },
       postcss: {},
     },
     modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // pwa: {},np
    // webpack-dev-server 相关配置
    devServer: {
     open: true,
     host: '0.0.0.0',
     https: false,
     hotOnly: false,
     port:8080
    //  overlay: {  // 关闭Eslint代码规范
    //     warnings: false,
    //     errors: false
    //  },
    //  lintOnSave: false  // 关闭Eslint代码规范
    //  proxy: {
    //       "/api": {
    //         target: "http://10.148.40.130:8000",
    //         ws: true,
    //         changeOrigin: true,
    //         pathRewrite: {
    //               // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
    //               '^/api': '' 
    //         }
    //       }
    //  }, // 设置代理
    //  before: app => {}
    },
    // 第三方插件配置
    // pluginOptions: {
    // }
}
   

   
