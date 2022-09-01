import React from 'react';
import HeaderBackButton from '../../components/sections/HeaderBackButton';
import { fetchLeaderboard } from '../../store/reducers/leaderboardReducer';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import './Leaderboard.scss';

const Leaderboard = () => {
    const leaderboardState = useAppSelector((state) => state.leaderboard);
    const { data, status } = leaderboardState;
    const dispatch = useAppDispatch();

    const generateCols = data
        .map(({ data }: any) => data)
        .map(({ name, score = 0 }: any) => (
            <li key={name} title={`score: ${score}`}>{name}</li>
        ));

    const getLeaderboard = async () => {
        await dispatch(fetchLeaderboard());
    }

    if (status === 'idle') {
        getLeaderboard();
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
