import React from 'react';
import Map from '../../game/map/Map';
import GameBackButton from './components/GameBackButton';

const Game = () => {
    return (
        <main className="game-page">
            <Map />
            <GameBackButton />
        </main>
    );
};

export default Game;
