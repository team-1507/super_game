// import ReactRefreshTypeScript from 'react-refresh-typescript';
// import { IS_DEV } from '../env';

export default {
    client: {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                // options: {
                //     getCustomTransformers: () => ({
                //         before: [IS_DEV && ReactRefreshTypeScript()].filter(Boolean),
                //     }),
                //     transpileOnly: IS_DEV,
                // },
            },
        ],
    },
    server: {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
            },
        ],
    },
};
