const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');

const path = require('path');
module.exports = merge(base, {
  entry: {
    client: path.join(__dirname, '../entry-client.js')
  }
});