import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Request, Response } from 'express';
import { Provider as ReduxProvider } from 'react-redux';
import App from "../../app/App";
import getPageHtml from "./bundle";
import store from '../../store';
import { StaticRouterContext } from "react-router/ts4.0";

export default (req: Request, res: Response) => {
    const location = req.url;
    const context: StaticRouterContext = {};
    const jsx = (
        <ReduxProvider store={store}>
            <StaticRouter location={location}>
                <App />
            </StaticRouter>
        </ReduxProvider>
    );

    if (context.url) {
        return {redirectUrl: context.url};
    }

    const reactHtml = renderToString(jsx);
    const reduxState = store.getState();

    res.send(getPageHtml(reactHtml, reduxState));
};
