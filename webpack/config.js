const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
// const postcssVars = require('postcss-simple-vars');
const postcssEasings = require('postcss-easings');
const postcssColorFunction = require('postcss-color-function');

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
      test: /\.(css|scss)$/,
      include: /src/,
      loader: "style-loader!css-loader?modules&importLoaders=1!postcss-loader"
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: [
        'style',
        'css'
      ]
    }, {
      test: /\.(ico|eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      exclude: /\/favicon.ico$/,
      loader: 'file-loader',
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }, {
      test: /\/favicon.ico$/,
      include: path.join(__dirname, '../'),
      loader: 'file',
      query: {
        name: 'favicon.ico?[hash:8]'
      }
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.json$/,
      loaders: ['json']
    }],
  },
  postcss: function(webpack) {
    return [postcssImport({
      addDependencyTo: webpack,
      path: [path.resolve('./src/css')]
    }), precss, postcssColorFunction, postcssEasings, autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./src/js'),
      path.resolve('./src/css'),
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
