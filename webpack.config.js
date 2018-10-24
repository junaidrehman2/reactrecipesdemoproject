const path = require("path");
const webpack = require("webpack");
const htmlHelper = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new htmlHelper({
      template: "./index.html",
      inject: "body"
    })
  ]
};
