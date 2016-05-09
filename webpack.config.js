var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname + '/public/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "public",
    historyApiFallback: false
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
            'style',
            'css?root=.',
            'autoprefixer?browsers=last 3 versions',
            'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?(\?\d+)?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?(\?\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin('app.css')]
}

