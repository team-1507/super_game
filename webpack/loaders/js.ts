// import ReactRefreshTypeScript from 'react-refresh-typescript';
// import { IS_DEV } from '../env';

export default {
    client: {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    plugins: ['react-refresh/babel'].filter(Boolean),
                },
            },
        ],
    },
    server: {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
            },
        ],
    },
};
