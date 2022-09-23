import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Request, Response } from 'express';
import { Provider as ReduxProvider } from 'react-redux';
import App from "../../app/App";
import getPageHtml from "./bundle";
import store from '../../store';

export default (req: Request, res: Response) => {
    const location = req.url;
    const jsx = (
        <ReduxProvider store={store}>
            <StaticRouter location={location}>
                <App />
            </StaticRouter>
        </ReduxProvider>
    );


    const reactHtml = renderToString(jsx);
    const reduxState = store.getState();

    res.send(getPageHtml(reactHtml, reduxState));
};
