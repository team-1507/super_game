import React from 'react';
import Character from '../../game/character/Character';
import Map from '../../game/map/Map';
import GameBackButton from './components/GameBackButton';
import './Game.scss';

const Game = () => {
    return (
        <main className="game-page">
            <Map />
            <Character />
            <GameBackButton />
        </main>
    );
};

export default Game;
