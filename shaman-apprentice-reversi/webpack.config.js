const path = require("path")

module.exports = {
  mode: 'development',
  entry: './src/shaman-apprentice-reversi.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'shaman-apprentice-reversi.js'
  }
};