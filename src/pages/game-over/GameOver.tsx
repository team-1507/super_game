import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './game-over.scss';

const GameOver = () => {
    const score = 9432;
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
                    <Link to="/game">
                        <Button type="primary">
                            START AGAIN
                        </Button>
                    </Link>
                </div>
                <div className="game-over__buttons-group__two-button__btn">
                    <Link to="/">
                        <Button type="primary">
                            MAIN PAGE
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GameOver;
