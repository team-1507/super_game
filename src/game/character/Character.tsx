import React, { RefObject, useEffect } from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';

import './Character.scss';

type CharacterProps = {
    canvas: RefObject<HTMLCanvasElement>,
};

const Character = (props: CharacterProps) => {
    const { canvas } = props;
    const characterRef = React.createRef<HTMLCanvasElement>();
    const spriteSheet = new SpriteSheet(config);
    useEffect(() => {
        spriteSheet.drawTile(1, canvas.current);
    });
    const canvasWidth = config.TILE_SIZE.width * config.TILE_SIZE.scale;
    const canvasHeight = config.TILE_SIZE.height * config.TILE_SIZE.scale;
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
