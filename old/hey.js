module.exports = {
  port: 9033,
  timestamp: true,
  dist: "dist",
  console: true,
  webpack: {
    console: true,
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/index",
        commons: ['common']
      }
    },
    commonTrunk: {
      common: ['vue', 'vue-router']
    },
    global: {
      $: "jquery",
      log: "hey-log"
    },
    alias: {
      js: './src/js/',
      components: './src/components/',
    },
    devServer: {
      historyApiFallback: true
    },
    externals: {}
  },
  copy: ["./static/images/**/*", "./components/demos/**/*.vue", "./components/common/qiniu.vue", "./components/demos/**/*.txt"]
}
