//webpack配置文件
const path = require("path");
const { WebpackDonePlugin, WebpackRunPlugin } = require("./webpack"); //手写webpack
module.exports = {
  entry: "./src/index.js", //入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [new WebpackRunPlugin(), new WebpackDonePlugin()],
};
