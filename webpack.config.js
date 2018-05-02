const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    // print: './src/print.js'
  },
  output: {
    library: 'thedep',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: ['react'],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve('./src'),
        loader: require.resolve('babel-loader')
      }
    ]
  }
}