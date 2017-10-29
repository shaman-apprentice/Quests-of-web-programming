const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, "dist"),
    },

    plugins: [ new HtmlWebpackPlugin({ template: './dist/index.html' }) ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['env'] }
                }
            },
            {
                test: /\.ttf$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'dist/[hash].[ext]',
                    }
                }
            }
        ]
    },
};