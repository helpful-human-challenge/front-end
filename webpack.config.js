'use strict';

require('dotenv').config({ path: `${__dirname}/.env` });
const production = process.env.NODE_ENV === 'production';

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin({
    filename: 'bundle-[hash].css',
  }),
  new HtmlPlugin({
    title: 'HtmlWebpackPlugin example',
  }),
  new HtmlPlugin({ template: `${__dirname}/src/public/index.html` }),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URL__: JSON.stringify(process.env.__API_URL__),
  }),
];

if(production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,
  devServer: {
    historyApiFallback: true,
  },
  devtool: production ? undefined : 'eval',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: process.env.CDN_URL,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /favicon\.ico$/,
        loader: 'url-loader',
        query: {
          limit: 1,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|glyph)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
