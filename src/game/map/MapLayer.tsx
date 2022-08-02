import React, { useEffect, useMemo } from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';

type MapLayerProps = {
    layerConfig: number[],
};

const MapLayer = (props: MapLayerProps) => {
    const { layerConfig } = props;
    const canvas = React.createRef<HTMLCanvasElement>();
    const spriteSheet = useMemo(() => new SpriteSheet(config), []);
    const tiles = layerConfig.map((tile, i) => {
        const row = Math.ceil((i + 1) / config.MAP_DIMENSIONS.width);
        const col = (i % config.MAP_DIMENSIONS.width) + 1;
        return {
            tileType: tile,
            row,
            col,
            key: `row-${row}-col-${col}`,
            id: `tile_row-${row}-col-${col}`,
        };
    });

    useEffect(() => {
        tiles.forEach((tile, i) => {
            spriteSheet.drawTile(tile.tileType, canvas.current, i);
        });
    }, [spriteSheet, canvas, tiles]);
    // eslint-disable-next-line no-restricted-syntax
    // tiles.forEach((tile, i) => {
    //     useEffect(() => {
    //         spriteSheet.drawTile(tile.tileType, canvas.current, i);
    //     }, [tile.tileType, i]);
    // });

    const canvasWidth = spriteSheet.TILE_SIZE.width
        * spriteSheet.TILE_SIZE.scale
        * (spriteSheet.MAP_DIMENSIONS?.width || 1);
    const canvasHeight = spriteSheet.TILE_SIZE.height
        * spriteSheet.TILE_SIZE.scale
        * (spriteSheet.MAP_DIMENSIONS?.height || 1);
    return (
        <canvas ref={canvas} width={canvasWidth} height={canvasHeight} />
    );
};

export default MapLayer;
