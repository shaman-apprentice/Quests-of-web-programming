const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "inline-source-map",
    module: {
      rules: [
          {
              test: /\.[tj]sx?$/,
              use: 'awesome-typescript-loader',
          },
          {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
          },
          {
              test: /\.(png|jpg|ttf|gif|txt)/,
              use: 'url-loader'
          }
      ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            'src',
            'node_modules',
        ]
    },
};