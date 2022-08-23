const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WorkboxPlugin = require("workbox-webpack-plugin");


const htmlPluginConfig = {
    filename: 'index.html',
    title: "IVAN\'S DACHA",
    template: 'src/template.html',
    path: path.resolve(__dirname, 'build'),
};

const MODE = {
    DEV: 'development',
    PROD: 'production',
};

const getOutputConfig = () => ({
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: path.resolve(__dirname, '/'),
});

module.exports = (_, argv) => {
    const mode = argv.mode || MODE.DEV;
    return {
        mode,
        entry: '/src/index.tsx',
        output: getOutputConfig(mode),
        target: 'web',
        devServer: {
            open: false,
            port: 3000,
            historyApiFallback: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: '/node_modules/',
                    use: ['ts-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { sourceMap: mode === MODE.DEV } },
                        { loader: 'sass-loader', options: { sourceMap: mode === MODE.DEV } },
                    ],
                },
                {
                  test: /\.(png|jpg|jpeg|gif|ogg)$/i,
                  type: 'asset/resource'
                },
            ],
        },
        plugins: [new HtmlWebpackPlugin(htmlPluginConfig), new MiniCssExtractPlugin(),  new WorkboxPlugin.InjectManifest({
            swSrc: path.resolve(__dirname, './sw.js'),
            maximumFileSizeToCacheInBytes: 50000000,
            mode: 'production',
        })],

        devtool: mode === MODE.DEV ? 'source-map' : false,

        optimization: {
            minimize: mode === MODE.PROD,
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
};
