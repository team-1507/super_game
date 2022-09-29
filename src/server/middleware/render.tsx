import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import { Request, Response } from 'express';
import Html from 'src/html';
import App from '../../app/App';
import store from '../../store';

export const render = (req: Request, res: Response) => {
    const location = req.url;

    let didError = false;

    res.socket.on('error', (error) => {
        console.error('Error: ', error);
    });

    const jsx = (
        <Html>
            <ReduxProvider store={store}>
                <StaticRouter location={location}>
                    <App />
                </StaticRouter>
            </ReduxProvider>
        </Html>
    );

    const stream = renderToPipeableStream(
        jsx,
        {
            onShellReady() {
                // The content above all Suspense boundaries is ready.
                // If something errored before we started streaming,
                // we set the error code appropriately.
                res.statusCode = didError ? 500 : 200;
                res.setHeader('Content-type', 'text/html');
                stream.pipe(res);
            },
            onShellError(error) {
                // Something errored before we could complete the shell
                // so we emit an alternative shell.
                res.statusCode = 500;
                res.send(
                    '<!doctype html><p>Loading...</p><script src="/main.js"></script>',
                );
            },
            onAllReady() {
                // If you don't want streaming, use this instead of onShellReady.
                // This will fire after the entire page content is ready.
                // You can use this for crawlers or static generation.

                // res.statusCode = didError ? 500 : 200;
                // res.setHeader('Content-type', 'text/html');
                // stream.pipe(res);
            },
            onError(err) {
                didError = true;
                console.error(err);
            },
        },
    );
};

export default { render };
