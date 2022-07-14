import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home-page/HomePage';
import SignUp from '../pages/sign-up/SignUp';
import GameOver from '../pages/game-over/GameOver';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="game-over" element={<GameOver />} />
        </Routes>
    );
};

export default App;
