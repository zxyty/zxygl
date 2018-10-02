const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractTextPlugin = new ExtractTextPlugin('css/[name].css'); // 去掉css文件夹路径
const extractTextPlugin = new ExtractTextPlugin('[name].css');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Glob = require('glob');
const srcDir = path.resolve(process.cwd(), 'src');

// 入口 js
let entryJs = (function () {
  var entryJsFiles = Glob.sync(srcDir + '/views/*.js');
  var entryJsMap = {};

  entryJsFiles.forEach(function (filePath) {
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
      entryJsMap[filename] = filePath;
  });

  return entryJsMap
})();

// 多文件html封装打包
var Htmlplugins = (function () {
  var entryHtml = Glob.sync(__dirname + '/views/*.html');
  var r = [];

  entryHtml.forEach(function (filePath) {
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));

      var conf = {
          filename: filename + '.html',       // 生成的 html 存放路径，相对于 path
          inject: 'body',
          template: __dirname + '/views/' + filename + '.html',
          minify: {                           // 压缩 HTML 文件
              removeComments: true,           // 移除 HTML 中的注释
              collapseWhitespace: false       // 删除空白符与换行符
          },
          chunks: ['common', filename]
      };

      r.push(new HtmlWebpackPlugin(conf));
  });
  return r;
})();

module.exports = {
  entry: entryJs,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static'),
    // chunkFilename: '[name].js'      // 会增加打包后的大小
  },

  // 外部对象
  // 当使用了<script>引入jquery时候需要手动打开这句注释
  /* <script
  src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous">
  </script> */
  // import jQuery from 'jquery'
  externals: {
    // jquery: 'jQuery'
  },

  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.json'],
    modules: ['node_modules'],      // 如果要添加要搜索的目录，该目录优先于node_modules/,  默认 ['node_modules']
    alias: {
      cameras: __dirname + '/src/cameras/',
      core: __dirname + '/src/core/',
      materials: __dirname + '/src/materials/',
      objects: __dirname + '/src/objects/',
      renderers: __dirname + '/src/renderers/',
      scenes: __dirname + '/src/scenes/'
    }
  },

  module: {
    rules: [
      {
        test: /\.css|less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        // loader: 'file-loader?limit=8192&name=/images/[name].[ext]'
        use: 'url-loader?limit=8192',
      },
      {
        test: /\.json$/,
        // loader: 'file-loader?limit=8192&name=/images/[name].[ext]'
        use: 'json-loader',
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?limit=10000&name=/fonts/[name].[ext]'
      }
    ]
  },

  plugins: [
    extractTextPlugin,
    new webpack.DefinePlugin({
      "__ENV__": JSON.stringify("development")
    }),

    // When using the uglifyjs-webpack-plugin you must provide the sourceMap: true option to enable SourceMap support.
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   minimize: true
    // }),

    // new OpenBrowserPlugin({
    //   url: 'http://localhost:30001'
    // }),
    
    // 分析代码
    // new BundleAnalyzerPlugin({ analyzerPort: 30010, }),
  ].concat(Htmlplugins),

  devtool: "eval-source-map", // development ==> eval-source-map,  production ==> source-map

  devServer: {
    disableHostCheck: false,  // 设置为true时，此选项会绕过主机检查。不建议这样做，因为不检查主机的应用程序容易受到DNS重新绑定攻击
    clientLogLevel: "info",   // 可能的值是none，error，warning或者info（默认值）。
    
    compress: true,           // Enable gzip compression for everything served:

    contentBase: path.join(__dirname, 'static'),
    /**
     * 想象一下，服务器正在运行http://localhost:8080并被output.filename设置为bundle.js。
     * 默认情况下publicPath为"/"，所以您的捆绑包可用http://localhost:8080/bundle.js
     * 捆绑包现在可用http://localhost:8080/assets/bundle.js
     */
    // publicPath: 'assets',      //

    lazy: false,

    historyApiFallback: {
      rewrites: [
        // { from: /^\/$/, to: '/src/views/tpl/landing.html' },
        // { from: /^\/subpage/, to: '/src/views/tpl/subpage.html' },
        { from: /./, to: '/views/404.html' }
      ],
      disableDotRule: true,       // 禁用路径上匹配点"."的规则
    },

    host: '127.0.0.1',
    port: 30001,
    hot: true,


    https: false,                // 这个使用webpack自签名证书
    // 也可以使用自己的签名
    // https: {
    //   key: fs.readFileSync('/path/to/server.key'),
    //   cert: fs.readFileSync('/path/to/server.crt'),
    //   ca: fs.readFileSync('/path/to/ca.pem'),
    // }

    open: true,                 // 自动打开dev浏览器
    inline: false,              // 使用iframe打开
    // 建议使用内联模式进行热模块更换，因为它包含来自websocket的HMR触发器。轮询模式可以作为替代，但需要额外的入口点，'webpack/hot/poll?1000'
    
  },
  mode: "development", //"production"
}