const fileRegex = /\.(png|jpg|jpeg|gif)$/i;

export default {
    client: {
        loader: 'url-loader',
        test: fileRegex,
    },
    server: {
        loader: 'null-loader',
        test: fileRegex,
    },
};
