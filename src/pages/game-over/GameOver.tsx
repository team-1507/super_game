import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useAppSelector } from '../../store/hooks';
import { useDispatch } from 'react-redux';
import { resetTimer } from 'src/game/store/timerSlice';
import { resetInventory } from 'src/game/store/inventorySlice';
import { resetGarden } from 'src/game/store/gardenStateSlice';
import { resetMap } from 'src/game/store/mapStateSlice';
import { resetPosition } from 'src/game/store/characterPositionSlice';
import LeaderboardAPI from '../../api/leaderboard/leaderboard';
import './game-over.scss';

const GameOver = () => {
    const { score } = useAppSelector((state) => state.inventory);
    const { data: { login: name } } = useAppSelector((state) => state.user);
    const { timestamp: time } = useAppSelector((state) => state.timer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const restartStore = () => {
        const data = { name, time, score };
        dispatch(resetTimer());
        dispatch(resetInventory());
        dispatch(resetGarden());
        dispatch(resetMap());
        dispatch(resetPosition());
        return LeaderboardAPI.setPlayerScoreToLeaderboard({ data });
    };
    const startAgain = () => {
        restartStore();
        navigate('/game');
    };
    const goMain = () => {
        restartStore();
        navigate('/');
    };

    return (
        <div className="game-over-page">
            <div className="game-over-page__title">
                <h3>Game over</h3>
            </div>
            <div className="game-over-page__score">
                <h3>
                    Overall score:
                    {score}
                </h3>
            </div>
            <div className="game-over__buttons-group">
                <div className="game-over__buttons-group__two-button__btn">
                    <Button type="primary" onClick={startAgain}>
                        START AGAIN
                    </Button>
                </div>
                <div className="game-over__buttons-group__two-button__btn">
                    <Button type="primary" onClick={goMain}>
                        MAIN PAGE
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GameOver;
