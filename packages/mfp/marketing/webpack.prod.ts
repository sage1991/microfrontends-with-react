import path from "path"
import webpack from "webpack"
import { merge } from "webpack-merge"

import common from "./webpack.common"

export default merge<webpack.Configuration>(common, {
  mode: "production",
  devtool: "source-map",
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    publicPath: "/marketing/",
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js"
  }
})
