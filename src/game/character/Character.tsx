import React, { useEffect } from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';
import * as mapConfig from '../map/config';

import './Character.scss';

const Character = () => {
    const characterRef = React.createRef<HTMLCanvasElement>();
    const spriteSheet = new SpriteSheet(config);
    useEffect(() => {
        spriteSheet.drawTile(1, characterRef.current);
    });
    const canvasWidth = mapConfig.TILE_SIZE.width
        * mapConfig.TILE_SIZE.scale
        * (mapConfig.MAP_DIMENSIONS?.width || 1);
    const canvasHeight = mapConfig.TILE_SIZE.height
        * mapConfig.TILE_SIZE.scale
        * (mapConfig.MAP_DIMENSIONS?.height || 1);
    return (
        <canvas
            ref={characterRef}
            id="ivan"
            width={canvasWidth}
            height={canvasHeight}
        />
    );
};

export default Character;
