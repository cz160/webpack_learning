const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: ["./src/index.js"],
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name][hash:4].js",
    publicPath: "",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "输出管理",
    }),
  ],
  module: {
    rules: [],
  },
};
