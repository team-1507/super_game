import React, { KeyboardEvent, useEffect, useState } from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';
import * as mapConfig from '../map/config';

import './Character.scss';

type Position = [number, number];

const Character = () => {
    const characterRef = React.createRef<HTMLCanvasElement>();
    const spriteSheet = new SpriteSheet(config);
    const [currentPosition, setCurrentPosition] = useState<Position>([1, 1]);
    const canvasWidth = mapConfig.TILE_SIZE.width
    * mapConfig.TILE_SIZE.scale
    * (mapConfig.MAP_DIMENSIONS?.width || 1);
    const canvasHeight = mapConfig.TILE_SIZE.height
    * mapConfig.TILE_SIZE.scale
    * (mapConfig.MAP_DIMENSIONS?.height || 1);

    const redrawCharacter = (position: Position) => {
        characterRef.current?.getContext('2d')?.clearRect(0, 0, canvasWidth, canvasHeight);
        setCurrentPosition(position);
    };

    const moveCharacter = (delta: Position) => {
        redrawCharacter([currentPosition[0] + delta[0], currentPosition[1] + delta[1]]);
    };

    const moves: Record<string, Position> = {
        KeyW: [-1, 0],
        KeyA: [0, -1],
        KeyS: [1, 0],
        KeyD: [0, 1],
    };

    const keyPressHandler = (e: KeyboardEvent) => {
        moveCharacter(moves[e.code]);
    };

    useEffect(() => {
        // document.addEventListener('keypress', (e) => {
        //     moveCharacter(moves[e.code]);
        // });
        spriteSheet.drawTile(1, characterRef.current, currentPosition);
    });
    return (
        <canvas
            ref={characterRef}
            id="ivan"
            width={canvasWidth}
            height={canvasHeight}
            onKeyDown={keyPressHandler}
            tabIndex={0}
        />
    );
};

export default Character;
