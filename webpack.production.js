var config = require('./webpack.config.js')
var webpack = require('webpack')


config.output.filename = config.output.filename.replace(/\.js$/, '.min.js')

delete config.devtool

config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    drop_console: true,
    compress: {
        warnings: false
    }
  })
]

module.exports = config
