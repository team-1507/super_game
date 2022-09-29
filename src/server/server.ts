// import path from 'path';
import express, { RequestHandler } from 'express';
import path from 'path';
import webpack from 'webpack';
// import 'babel-polyfill';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import clientConfig from '../../webpack/client.config';
// import serverRenderMiddleware from './middleware/render';
// import csp from './middleware/csp';
import { render } from './middleware/render';
import postRoutes from '../database/routes';

// require('../database');

function getWebpackMiddlewares(config: webpack.Configuration): RequestHandler[] {
    const compiler = webpack({ ...config, mode: 'development' });

    return [
        // Middleware для Webpack-билда проекта в реальном времени.
        // Низкоуровневый аналог webpack-dev-server
        devMiddleware(compiler, {
            // logLevel: 'error',
            publicPath: config.output!.publicPath!,
        }),
        // Middleware для HMR
        hotMiddleware(compiler, { path: '/__webpack_hmr' }),
        render,
    ];
}

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', postRoutes as RequestHandler);

app.use(express.static(path.resolve(__dirname, '../build')));

app.get(
    '/*',
    ...getWebpackMiddlewares(clientConfig),
    // render,
);

export { app };

export default app;
