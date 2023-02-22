const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./index.ts",
  },
  target: "node",
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
  externals: ["express"],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./js"),
  },
};
