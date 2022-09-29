import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WorkboxPlugin from "workbox-webpack-plugin";

const htmlPluginConfig = {
    filename: 'index.html',
    title: 'IVAN&#39;S DACHA',
    template: 'src/template.html',
    path: path.resolve(__dirname, 'build'),
    favicon: 'static/images/favicon.ico',
};

console.log("path.resolve(__dirname, 'src')");
console.log(path.resolve(__dirname, '../'));

const config = {
    name: 'server',
    target: 'node',
    context: path.resolve(__dirname, '../'),
    node: {
        global: false,
        __dirname: false,
        __filename: false,
    },
    entry: path.join(SRC_DIR, 'server/server'),
    module: {
        rules: [fileLoader.server, cssLoader.server, jsLoader.server],
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: path.resolve(__dirname, '/'),
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    plugins: [
        new HtmlWebpackPlugin(htmlPluginConfig),
        new MiniCssExtractPlugin(),
        // new WorkboxPlugin.InjectManifest({
        //     swSrc: path.resolve(__dirname, '../sw.js'),
        //     maximumFileSizeToCacheInBytes: 50000000,
        //     mode: 'production',
        // })
    ],
    devtool: 'source-map',

    performance: {
        hints: IS_DEV ? false : 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    externals: [nodeExternals()],

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
        ],
    },
};

export default config;
