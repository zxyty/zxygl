module.exports = {
  entry: "./src/ZXYGL.js",
  output: {
    filename: "./ZXYGL.js"
  },
  module: {
    //webpack使用loader的方式处理各种各样的资源
    rules: [
      {
        test: /\.js$/, //处理以.js结尾的文件
        use: {
        //   query: {
        //     presets: ["es2015", "stage-0"]
        //   },
        //   exclude: /node_modules/, //处理除了nodde_modules里的js文件
          loader: "babel-loader" //用babel-loader处理
        }
      }
    ]
  },
  mode: "development", //"production"
  // mode: "production"
};
