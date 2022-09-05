import React from 'react';
import { notification } from 'antd';
import HeaderBackButton from '../../components/sections/HeaderBackButton';
import { fetchLeaderboard } from '../../store/reducers/leaderboardReducer';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import './Leaderboard.scss';

const Leaderboard = () => {
    const leaderboardState = useAppSelector((state) => state.leaderboard);
    const { data, status } = leaderboardState;
    const dispatch = useAppDispatch();

    const generateCols = data
        .map((lbdata) => lbdata.data)
        .map(({ name, score = 0 }) => (
            <li key={name} title={`score: ${score}`}>{name}</li>
        ));

    const getLeaderboard = async () => {
        await dispatch(fetchLeaderboard());
    };

    if (status === 'idle') {
        getLeaderboard().catch((e) => {
            notification.open({
                message: 'Error getting leaderboard',
                description: String(e),
            });
        });
    }

    return (
        <main className="leaderboard-page">
            <HeaderBackButton header="Leaderboard" />
            {/* Временная кнопка добавления результатов */}
            <section className="leaderboard-page__grid">
                <ol className="leaders-list">
                    {generateCols}
                </ol>
            </section>
        </main>
    );
};

export default Leaderboard;
