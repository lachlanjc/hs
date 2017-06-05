const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './site/entry.js',

  output: {
    path: path.join(__dirname, 'site'),
    filename: 'bundle.js'
  },

  node: {
    fs: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  devServer: {
    contentBase: 'site/',
    historyApiFallback: true
  }
}
