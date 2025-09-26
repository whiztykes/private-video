const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyAssetsPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const FOLDER_ROOT = path.resolve(__dirname, '../');
const FOLDER_SRC = path.join(FOLDER_ROOT, 'src');
const BUILD_FOLDER = "whiztykes";
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    script: path.join(FOLDER_SRC, 'index.js')
  },
  output: {
    path: path.join(FOLDER_ROOT, 'dist'),
    filename: '[name].js',
    publicPath: "/"+ BUILD_FOLDER + "/",
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
    new MiniCssExtractPlugin(),
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
            return "./assets/[name][ext]";
          },
        },
      ],
    })

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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ]
  }
}