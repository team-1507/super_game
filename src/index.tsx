import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';

const Root = () => (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

const container = document.getElementById('root');
if (!container) {
    throw new Error('container was not found');
}

hydrateRoot(container, <Root />);

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js').then(() => {
//             console.log('success sw');
//         }).catch((error) => {
//             console.log('error sw:', error);
//         });
//     });
// }
