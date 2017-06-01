var path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/static/',
    firename: 'build.js'
  }
}
