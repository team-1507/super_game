const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { IS_DEV } = require('../env');

export default {
    client: {
        test: /\.s[ac]ss$/i,
        use: [
            IS_DEV && 'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            { loader: 'sass-loader', options: { sourceMap: true } },
        ].filter(Boolean),
    },
    server: {
        test: /\.s[ac]ss$/i,
        loader: 'null-loader',
    },
};
