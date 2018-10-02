const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: "./src/ZXYGL.js",
  output: {
    filename: "./ZXYGL.js",
  },

  module: {
    //webpack使用loader的方式处理各种各样的资源
    rules: [
      {
        test: /\.js$/, //处理以.js结尾的文件
        use: "babel-loader",
        exclude: /node_modules/, //处理除了nodde_modules里的js文件
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
          NODE_ENV: JSON.stringify("production")
      }
    }),
  ],
  // 压缩js
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: false,
            },
            sourceMap: true
        })
    ]
  },

  devtool: "source-map", // development ==> eval-source-map,  production ==> source-map
  mode: "production", //"production"
  // mode: "production"
};
