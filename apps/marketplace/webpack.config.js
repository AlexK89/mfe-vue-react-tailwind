const { VueLoaderPlugin } = require("vue-loader");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  mode: "development",
  output: {
    publicPath: "http://localhost:3002/",
  },
  devServer: {
    port: 3002,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "marketplace",
      filename: "remoteEntry.js",
      library: { type: "var", name: "marketplace" },
      exposes: {
        "./Dashboard": "./src/main.ts",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
