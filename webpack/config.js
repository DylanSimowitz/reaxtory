const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'react-hot-loader/patch',
    './js'
  ],
  output: {
    path: path.join(__dirname, '../dist/js/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.json$/,
      loaders: ['json']
    } ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    //   filename: 'vendor.bundle.js'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: false
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devServer: {
    contentBase: 'dist/js/',
    proxy: {
      "/": {
        "target": {
          "host": "baxtory.dev",
          "protocol": 'http:',
          "port": 80
        },
        changeOrigin: true,
        secure: false
      }
    },
    port: 3000,
    hot: true,
    quiet: true,
    historyApiFallback: true
  }
}
