import React, { useEffect, useMemo } from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';
import * as constants from '../constants';

type MapLayerProps = {
    layerConfig: number[],
};

const MapLayer = (props: MapLayerProps) => {
    const { layerConfig } = props;
    const canvas = React.createRef<HTMLCanvasElement>();
    const spriteSheet = useMemo(() => new SpriteSheet({ ...config, ...constants }), []);

    useEffect(() => {
        layerConfig.forEach((tile, i) => {
            spriteSheet.drawTile(tile, canvas.current, i);
        });
    }, [spriteSheet, canvas, layerConfig]);

    const canvasWidth = spriteSheet.SPRITE_SIZE.width
        * spriteSheet.spriteScale
        * constants.MAP_SIZE[1];
    const canvasHeight = spriteSheet.SPRITE_SIZE.height
        * spriteSheet.spriteScale
        * constants.MAP_SIZE[0];
    return (
        <canvas ref={canvas} width={canvasWidth} height={canvasHeight} />
    );
};

export default MapLayer;
