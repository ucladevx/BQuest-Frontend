// Development config

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: [
      'main.js'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'build/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: "css-loader"},
            {loader: "sass-loader"},
          ]
        }),
      },
      {
        test: /\.js$/,
        use: [{loader: "babel-loader"}],
      },
    ],
  },
  devtool: 'eval-source-map',
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'WEBPACK': JSON.stringify(process.env.WEBPACK || ''),
      }
    }),
    new ExtractTextPlugin('build/[name].css'),
  ],
  watchOptions: {
    poll: 2000,
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: [path.join(__dirname, 'pages')],
    historyApiFallback: true,
    port: 8080,
  },
};
