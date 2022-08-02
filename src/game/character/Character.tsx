import React, { useEffect } from 'react';
import { drawTile } from '../SpriteSheet';
// import { MAP } from './config';

import './Character.scss';

const Character = () => {
    const characterRef = React.createRef<HTMLCanvasElement>();
    useEffect(() => {
        drawTile(1, characterRef.current);
    });
    return (
        <div className="game-map">
            11
        </div>
    );
};

export default Character;
