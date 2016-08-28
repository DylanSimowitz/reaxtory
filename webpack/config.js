const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: {
    js: './js',
    vendor: ['react','react-hot-loader/patch'],
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    })
  ],
  devServer: {
    contentBase: '../src/js',
    proxy: {
      "/": {
        "target": {
          "host": "baxtory.dev",
          "protocol": 'http:',
          "port": 80
        },
        ignorePath: true,
        changeOrigin: true,
        secure: false
      }
    },
    port: 3000,
    hot: true,
    quiet: true
  }
}
