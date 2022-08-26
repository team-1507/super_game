import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Game from '../pages/game';
import SignUp from '../pages/sign-up/SignUp';
import SignIn from '../pages/sign-in';
import Settings from '../pages/settings';
import GameOver from '../pages/game-over/GameOver';
import Leaderboard from '../pages/leaderboard/Leaderboard';
import HomePage from '../pages/home-page/HomePage';
import Forum from '../pages/forum';
import UserApi from '../api/user/user';
import { useAppDispatch } from '../store/hooks';
import { setUser } from '../store/reducers';

const App = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        UserApi.getCurrentUser().then((response) => {
            if (response) {
                dispatch(setUser(response));
            } else {
                navigate('/sign-in');
            }
        }).catch(() => {
            navigate('/sign-in');
        });
    }, [dispatch, navigate]);
    return (
        <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/settings/:activeTab" element={<Settings />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/game-over" element={<GameOver />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/forum/:topicId" element={<Forum />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};

export default App;
