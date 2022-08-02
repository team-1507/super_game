import React from 'react';
import Character from '../../game/character/Character';
import { MAP } from '../../game/map/config';
import MapLayer from '../../game/map/MapLayer';
// import Map from '../../game/map/Map';
import GameBackButton from './components/GameBackButton';

const Game = () => {
    const canvas = React.createRef<HTMLCanvasElement>();
    return (
        <main className="game-page">
            <canvas ref={canvas} width="1280" height="1280" />
            <MapLayer layerConfig={MAP[0]} canvas={canvas} />
            <Character canvas={canvas} />
            {/* <Map /> */}
            <GameBackButton />
        </main>
    );
};

export default Game;
