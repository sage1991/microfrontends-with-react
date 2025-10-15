import { CleanWebpackPlugin } from "clean-webpack-plugin"
import dotenv from "dotenv"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import HTMLWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack, { container } from "webpack"

import { dependencies } from "../../../package.json"

dotenv.config({ path: path.resolve(__dirname, ".env") })

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
      name: "container",
      remotes: {
        "@mfp/marketing": process.env.MFP_MARKETING_REMOTE_ENTRY!,
        "@mfp/dashboard": process.env.MFP_DASHBOARD_REMOTE_ENTRY!,
        "@mfp/auth": process.env.MFP_AUTH_REMOTE_ENTRY!
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
