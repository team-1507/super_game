import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '../../../../components/icons/ArrowBack';
import './GameBackButton.scss';

const GameBackButton = () => {
    return (
        <div className="game-back-button">
            <Link to="/" className="back-button">
                <ArrowBack />
            </Link>
        </div>
    );
};

export default GameBackButton;
