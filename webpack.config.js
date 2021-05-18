const path = require("path");
const webpack = require("webpack");

const LIBRARY_NAME = "o-components";

const plugins = [];
let extension = ".js";

if (process.env.WEBPACK_ENV === "build") {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
    })
  );
  extension = ".min.js";
}

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: `${LIBRARY_NAME}.${extension}`,
    library: {
      name: LIBRARY_NAME,
      type: "umd",
    },
  },
  externals: {
    react: "react",
  },
  plugins,
};
