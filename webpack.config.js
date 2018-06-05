const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    other: './src/other-component.js'
  },
  output: {
    library: 'thedep',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  externals: ['react', 'the-other-dep'],
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