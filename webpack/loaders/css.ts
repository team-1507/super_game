import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { IS_DEV } from '../env';


export default {
    client: {
        test: /\.s[ac]ss$/i,
        use: [
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'sass-loader',
                options: { sourceMap: true },
            },
        ].filter(Boolean),
    },
    server: {
        test: /\.s[ac]ss$/i,
        loader: 'null-loader',
    },
};
