const fileRegex = /\.(png|jpg|jpeg|gif|ogg)$/i;

export default {
    client: {
        loader: 'url-loader', // static/assets
        test: fileRegex,
    },
    server: {
        loader: 'null-loader',
        test: fileRegex,
    },
};
