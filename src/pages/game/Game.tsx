import React, { createRef } from 'react';
import Character from '../../game/character/Character';
import Map from '../../game/map/Map';
import PauseMenu from '../../game/ui/PauseMenu';
import GameBackButton from './components/GameBackButton';
import './Game.scss';

const Game = () => {
    const container = createRef<HTMLDivElement>();
    return (
        <main className="game-page">
            <div className="game-page-map-container" ref={container}>
                <Map />
                <Character container={container} />
                <GameBackButton />
            </div>
            <PauseMenu />
        </main>
    );
};

export default Game;
