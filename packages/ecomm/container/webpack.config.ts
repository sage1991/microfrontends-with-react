import "webpack-dev-server"

import HTMLWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack, { container } from "webpack"

const { ModuleFederationPlugin } = container

export default {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    host: "localhost",
    port: 3000
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        "@ecomm/products": "products@http://localhost:3001/remoteEntry.js",
        "@ecomm/cart": "cart@http://localhost:3002/remoteEntry.js"
      }
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
