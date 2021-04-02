const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: { 
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
      },
      {
        test : /\.css$/, 
        exclude: /node_modules/,
        use:['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    proxy: {
      '/jobs': 'http://localhost:3000',
    }
  },
  plugins : [
    new HtmlWebpackPlugin ({
        template : 'client/index.html'
    })
  ]
};