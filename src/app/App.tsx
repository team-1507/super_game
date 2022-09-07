import React, { useEffect } from 'react';
import './App.scss';
import {
    Route, Routes, useNavigate, useSearchParams,
} from 'react-router-dom';
import { notification } from 'antd';
import { PayloadAction } from '@reduxjs/toolkit';
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
import { UserDto } from '../api/user/types';
import OAuthApi from '../api/oauth/oauth';

const App = () => {
    const userState = useAppSelector((state) => state.user);
    const { status } = userState;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');

    useEffect(() => {
        const OauthEnter = async () => {
            try {
                const response = await OAuthApi.signInWithYandex({ code: code as string, redirect_uri: '' });
                if (response) {
                    navigate('/');
                }
            } catch (err) {
                navigate('/sign-in');
            }
        };
        const getCurrentUser = async () => {
            try {
                const { payload } = await dispatch(fetchUser()) as PayloadAction<UserDto>;
                const { id } = payload;
                const path = (window.location.pathname);
                if (!id) {
                    navigate('/sign-in');
                } else if (path === '/sign-in' || path === '/sign-up') {
                    navigate('/');
                }
            } catch (err) {
                navigate('/sign-in');
            }
        };
        if (code) {
            OauthEnter().catch((e) => {
                notification.open({
                    message: 'Error getting current user',
                    description: String(e),
                });
            });
            return;
        }
        if (status === 'idle') {
            getCurrentUser().catch((e) => {
                notification.open({
                    message: 'Error getting current user',
                    description: String(e),
                });
            });
        }
    });

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
