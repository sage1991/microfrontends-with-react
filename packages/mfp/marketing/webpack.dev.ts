import "webpack-dev-server"

import path from "path"
import webpack from "webpack"
import { merge } from "webpack-merge"

import common from "./webpack.common"

export default merge<webpack.Configuration>(common, {
  mode: "development",
  devtool: "eval-source-map",
  entry: path.resolve(__dirname, "./src/main.ts"),
  output: {
    path: path.resolve(__dirname, "./dist")
  },
  devServer: {
    port: 3001,
    host: "localhost",
    historyApiFallback: {
      index: "index.html"
    }
  }
})
