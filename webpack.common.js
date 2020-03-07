const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(svg|ico|png|jpg|jpeg|gif|webp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]-hash.[ext]",
            outputPath: path.resolve(__dirname, "dist/assets/img")
          }
        }
      }
    ]
  }
};
