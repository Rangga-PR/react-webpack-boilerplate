const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    open: true,
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react app",
      template: "./src/index.html"
    })
  ]
});
