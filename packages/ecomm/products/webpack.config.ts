import "webpack-dev-server"

import HTMLWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack, { container } from "webpack"

const { ModuleFederationPlugin } = container

export default {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 3001
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        ".": "./src/index"
      },
      shared: ["@faker-js/faker"]
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."]
  }
} satisfies webpack.Configuration
