
const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    bundle: './site/entry.js'
  },
  output: {
    path: path.join(__dirname, '/site'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    contentBase: 'site'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

module.exports = config

