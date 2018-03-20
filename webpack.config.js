const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  watch: false,
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.[hash:8].js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
        },
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '!!raw-loader!src/views/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/fonts',
        to: './fonts',
      },
      {
        from: 'src/assets/images',
        to: './images',
      },
    ]),
    new ExtractTextPlugin({
      filename: 'styles/style.[hash:8].css',
      allChunks: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      },
      {
        test: /\.sass$/,
        exclude: '/node_modules',
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { url: false } },
            { loader: 'sass-loader', query: { sourceMap: false } },
          ],
        }),
      },
      {
        test: /\.(jpg|png|svg)$/,
        include: path.join(__dirname, 'src'),
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
