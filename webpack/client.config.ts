import path from 'path';
import webpack, { Configuration, Entry } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IS_DEV, DIST_DIR, SRC_DIR } from './env';

import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

const htmlPluginConfig = {
    filename: 'index.html',
    title: 'IVAN&#39;S DACHA',
    template: 'src/template.html',
    path: path.resolve(__dirname, 'build'),
    favicon: 'static/images/favicon.ico',
};

const config: Configuration = {
    target: 'web',
    node: false,
    entry: ([
        // IS_DEV && 'react-hot-loader/patch',
        // Entry для работы HMR
        // IS_DEV && 'webpack-hot-middleware/client',
        IS_DEV && 'css-hot-loader/hotModuleReplacement',
        path.join(SRC_DIR, 'index'),
    ].filter(Boolean) as unknown) as Entry,
    module: {
        rules: [fileLoader.client, cssLoader.client, jsLoader.client],
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: path.resolve(__dirname, '/'),
    },
    resolve: {
        modules: ['src', 'node_modules'],
        // alias: { 'react-dom': '@hot-loader/react-dom' },
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new HtmlWebpackPlugin(htmlPluginConfig),
        // Plugin для HMR
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),

    devtool: 'source-map',

    performance: {
        hints: IS_DEV ? false : 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};

export default config;
