import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app';
import SignUp from './components/sign-up/SignUp';
import GameOver from './components/game-over/GameOver';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="game-over" element={<GameOver />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
