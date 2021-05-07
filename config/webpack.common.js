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
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|jpg|gif$/,
        use: ["file-loader"],
      },
      {
        test: /\.txt$/,
        use: {
          loader: path.resolve(__dirname, "../loader/index.js"),
          options: {
            name: "cz",
          },
        },
      },
    ],
  },
};
