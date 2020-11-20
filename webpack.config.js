const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  resolve: {
    alias: {
      'code-mirror-lint': path.resolve(
        __dirname,
        'src/custom-packages/code-mirror-lint.js',
      ),
      'json-lint': path.resolve(__dirname, 'src/custom-packages/json-lint.js'),
      'react-pdf': path.resolve(__dirname, 'node_modules/@react-pdf/renderer'),
      'src/components': path.resolve(__dirname, 'src/components'),
      'src/customizers': path.resolve(__dirname, 'src/components/customizers'),
      'src/fonts': path.resolve(__dirname, 'src/fonts/fonts.js'),
      'src/pages': path.resolve(__dirname, 'src/components/pages'),
      'src/templates': path.resolve(__dirname, 'src/components/templates'),
    },
    fallback: {
      fs: require.resolve('fs'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/manifest.json',
          to: 'assets/manifest.json',
          toType: 'file',
        },
        {
          from: 'public/robots.txt',
          to: 'assets/robots.txt',
          toType: 'file',
        },
        {
          from: 'public/logo192.png',
          to: 'assets/logo192.png',
          toType: 'file',
        },
        {
          from: 'public/logo512.png',
          to: 'assets/logo512.png',
          toType: 'file',
        },
      ],
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
