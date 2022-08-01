import React from 'react';
import Map from '../../game/map/Map';
import GameBackButton from './components/GameBackButton';

const Game = () => {
    return (
        <main className="game-page">
            <GameBackButton />
            <Map />
        </main>
    );
};

export default Game;
