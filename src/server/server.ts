import path from 'path';
import express, { RequestHandler } from 'express';
import 'babel-polyfill';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import clientConfig from '../../webpack/client.config';
import serverRenderMiddleware from './middleware/render';
import csp from './middleware/csp';
import postRoutes from '../database/routes';

require('../database');

// Эта функция возвращает middleware для локального девсервера и HMR
// Она должна работать только для режима разработки
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
    ];
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', postRoutes as RequestHandler);

// Отдаём статику приложения
app
    .use(express.static(path.resolve(__dirname, '../build')))
    .use(csp);

// На все get запросы запускаем сначала middleware dev server,
// а потом middleware рендеринга приложения
app.get('/*', [...getWebpackMiddlewares(clientConfig)], serverRenderMiddleware);

export { app };

export default app;
