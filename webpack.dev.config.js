const webpackConfig = require('./webpack.config');

webpackConfig.mode = 'development';
webpackConfig.devtool = 'eval-source-map';

module.exports = webpackConfig;
