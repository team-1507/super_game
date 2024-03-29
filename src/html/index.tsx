import React, { HTMLProps } from 'react';

type HtmlElemProps = HTMLProps<HTMLElement> & {
    reduxState?: Record<string, unknown>;
};

const Html = (props: HtmlElemProps) => {
    const { children, reduxState } = props;
    const reduxStateString = reduxState ? `window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}` : '';
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                <title>IVAN&#39;S DACHA</title>
                <link href="/main.css" rel="stylesheet" />
            </head>
            <body>
                <div id="root">
                    {children}
                </div>
                <script>
                    {reduxStateString}
                </script>
                <script src="/main.js" />
            </body>
        </html>
    );
};

export default Html;
