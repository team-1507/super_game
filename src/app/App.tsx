import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Game from '../pages/game';
import SignUp from '../pages/sign-up/SignUp';
import SignIn from '../pages/sign-in';
import Settings from '../pages/settings';
import GameOver from '../pages/game-over/GameOver';
import Leaderboard from '../pages/leaderboard/Leaderboard';
import HomePage from '../pages/home-page/HomePage';
import Forum from '../pages/forum';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchUser } from '../store/reducers/userReducer';
import './App.scss';

const App = () => {
    const userState = useAppSelector((state) => state.user);
    const { status } = userState;
    const dispatch = useAppDispatch();

    const getCurrentUser = async () => {
        const navigate = useNavigate();

        try {
            const { payload: { id } }: any = await dispatch(fetchUser());

            if (!id) {
                navigate('/sign-in');
            }
        } catch (err) {
            navigate('/sign-in');
        }
    }

    if (status === 'idle') {
        getCurrentUser();
    }

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

export default hot(App);
