const webpack = require('webpack');

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyAssetsPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const FOLDER_ROOT = path.resolve(__dirname, '../');
const FOLDER_SRC = path.join(FOLDER_ROOT, 'src');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    script: path.join(FOLDER_SRC, 'index.js')
  },
  output: {
    path: path.join(FOLDER_ROOT, 'dist'),
    filename: '[name].js',
    publicPath: "/",
  },
  devServer: {
    open: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
    // devMiddleware: {
    //     writeToDisk: true
    // }
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ESLintPlugin({
      extensions : [".js", ".jsx"],
      fix: false,
      emitError : true,
      emitWarning : true,
      failOnError : true,
      failOnWarning : true
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.join(FOLDER_SRC, 'index.html'),
      filename: 'index.html', // output file
      minify: false
    }),
    new CopyAssetsPlugin({
      patterns: [
        {
          from: "./src/assets/**",
          to({ context, absoluteFilename }) {
            console.log("Copy " , context, absoluteFilename);
            return "./assets/[name][ext]";
          },
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /.(less|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ]
  }
}