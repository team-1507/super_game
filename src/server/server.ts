// import path from 'path';
import express, { RequestHandler } from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { render } from './middleware/render';
// import 'babel-polyfill';
// import webpack from 'webpack';
// import devMiddleware from 'webpack-dev-middleware';
// import hotMiddleware from 'webpack-hot-middleware';
// import clientConfig from '../../webpack/client.config';
// import serverRenderMiddleware from './middleware/render';
// import csp from './middleware/csp';
// import postRoutes from '../database/routes';

// require('../database');

// Эта функция возвращает middleware для локального девсервера и HMR
// Она должна работать только для режима разработки
// function getWebpackMiddlewares(config: webpack.Configuration): RequestHandler[] {
//     const compiler = webpack({ ...config, mode: 'development' });

//     return [
//         // Middleware для Webpack-билда проекта в реальном времени.
//         // // Низкоуровневый аналог webpack-dev-server
//         // devMiddleware(compiler, {
//         //     // logLevel: 'error',
//         //     publicPath: config.output!.publicPath!,
//         // }),
//         // // Middleware для HMR
//         // hotMiddleware(compiler, { path: '/__webpack_hmr' }),
//         serverRenderMiddleware,
//     ];
// }

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // app.use('/api/posts', postRoutes as RequestHandler);

// // Отдаём статику приложения
// app
//     .use(express.static(path.resolve(__dirname, '../build')))
//     .use(csp);

// На все get запросы запускаем сначала middleware dev server,
// а потом middleware рендеринга приложения
// console.log('serverRenderMiddleware');
// console.log(serverRenderMiddleware());
// console.log('/serverRenderMiddleware');
// app.get('/*', ...getWebpackMiddlewares(clientConfig));

const PORT = process.env.PORT || 3000;
const app = express();


function handleErrors(fn) {
    return async function (req, res, next) {
        try {
            return await fn(req, res);
        } catch (x) {
            next(x);
        }
    };
}

async function waitForWebpack() {
    while (true) {
        try {
            readFileSync(path.resolve(__dirname, '../build/main.js'));
            return;
        } catch (err) {
            console.log(
                'Could not find webpack build output. Will retry in a second...',
            );
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
}

app.get(
    '/',
    handleErrors(async (req, res) => {
        await waitForWebpack();
        render(req, res);
    }),
);
app.use(express.static('build'));
app.use(express.static('public'));

export { app };

export default app;
