
const path = require('path');
const HtmlWebackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./assets/stylesheets/js/main.js",
  mode: "development",
  watch: true ,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename : "webpack.bundel.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    port: 7000,
    contentBase: path.join(__dirname, './dist'),
    hot: true
  },
  plugins:[new HtmlWebackPlugin({
    template: './index.html'
  })]
};
