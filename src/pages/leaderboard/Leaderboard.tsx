import React from 'react';
import users from './users';
import HeaderBackButton from '../../components/sections/HeaderBackButton';
import LeaderboardApi from '../../api/leaderboard/leaderboard';
import { CURSOR, LIMIT, RATING_FIELD_NAME } from '../../api/leaderboard/constants';
import { Button } from 'antd';
import './Leaderboard.scss';

// Убрать после успешного тестирования апишки результатов
import { useAppSelector } from '../../store/hooks';
import { TEAM_NAME } from '../../api/leaderboard/constants';
//

const Leaderboard = () => {
    const user = useAppSelector((state) => state.user);
    let items = users;
    const generateCols = (items: any) => {
        return items
            .map(({ name }: any) => (
                <li key={name}>{name}</li>
            ));
    }
    const body = { cursor: CURSOR, limit: LIMIT, ratingFieldName: RATING_FIELD_NAME };
    LeaderboardApi.getLeaderboard(body)
        .then((res) => {
            console.warn(res);
            items = res || [];
        });
    const setLeaders = () => {
        const { login } = user;
        if (!login) return;
        const body = {
            data: {
                name: login,
                score: 2,
                time: 1
            },
            ratingFieldName: RATING_FIELD_NAME,
            teamName: TEAM_NAME,
        };
        LeaderboardApi.setPlayerScoreToLeaderboard(body);
    };


    return (
        <main className="leaderboard-page">
            <HeaderBackButton header="Leaderboard" />
            {/* Временная кнопка добавления результатов */}
            <Button htmlType="button" type="primary" onClick={setLeaders}>
                Set my super result
            </Button>
            <section className="leaderboard-page__grid">
                <ol className="leaders-list">
                    {generateCols(items)}
                </ol>
            </section>
        </main>
    );
};

export default Leaderboard;
