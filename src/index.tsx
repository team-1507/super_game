import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

// if ("serviceWorker" in navigator) {
//     const wb = new Workbox("/service-worker.js");
//     wb.register().then((registration) => {
//         console.log('ServiceWorker registration successful with scope: ', registration?.scope);
//     }).catch((error: string) => {
//         console.log('ServiceWorker registration failed: ', error);
//     });
// }

// function startServiceWorker() {
//     if ('serviceWorker' in navigator) {
//         window.addEventListener('load', () => {
//             navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).then((registration) => {
//                 console.log('ServiceWorker registration successful with scope: ', registration.scope);
//             }).catch((error: string) => {
//                 console.log('ServiceWorker registration failed: ', error);
//             });
//         });
//     }
// }
//
// startServiceWorker();
