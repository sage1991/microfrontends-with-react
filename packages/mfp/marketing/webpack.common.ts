import { CleanWebpackPlugin } from "clean-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import HTMLWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack, { container } from "webpack"

import { dependencies } from "../../../package.json"

const { ModuleFederationPlugin } = container

export default {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."]
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/i,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new ForkTsCheckerWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html")
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        ".": "./src/index"
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"]
        },
        "react-router": {
          singleton: true,
          requiredVersion: dependencies["react-router"]
        },
        "@babel/runtime": {
          singleton: true,
          requiredVersion: dependencies["@babel/runtime"]
        }
      }
    })
  ]
} satisfies webpack.Configuration
