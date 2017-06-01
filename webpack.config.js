var path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/static/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'sass-loader']
      }
    ]
  }
}
