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
    publicPath: "/",
    path: path.resolve(__dirname, "./dist")
  },
  devServer: {
    port: 3002,
    host: "localhost",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    historyApiFallback: {
      index: "/index.html"
    }
  }
})
