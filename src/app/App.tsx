import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home-page/HomePage';
import SignUp from '../pages/sign-up/SignUp';
import GameOver from '../pages/game-over/GameOver';
import SignIn from '../pages/sign-in';
import Leaderboard from '../pages/leaderboard/Leaderboard';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="game-over" element={<GameOver />} />
            <Route path="leaderboard" element={<Leaderboard />} />
        </Routes>
    );
};

export default App;
