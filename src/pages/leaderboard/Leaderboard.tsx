import React from 'react';
import './Leaderboard.scss';
import users from './users';
import HeaderBackButton from '../../components/sections/HeaderBackButton';

const Leaderboard = () => {
    const generateCols = users
        .map((item) => (
            <li key={item}>{item}</li>
        ));

    return (
        <main className="leaderboard-page">
            <HeaderBackButton header="Leaderboard" />
            <section className="leaderboard-page__grid">
                <ol className="leaders-list">
                    {generateCols}
                </ol>
            </section>
        </main>
    );
};

export default Leaderboard;
