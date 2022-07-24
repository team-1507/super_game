// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');

// eslint-disable-next-line import/extensions
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
});
