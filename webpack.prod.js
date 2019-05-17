const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    })
  ],
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 50000,
      minChunks: 1,
      cacheGroups: {
        default: false,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor.${packageName.replace('@', '')}`;
          }
        }
      }
    },
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: true
        }
      })
    ]
  },
  performance: {
    hints: false,
    maxAssetSize: 200000
  }
});