const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};