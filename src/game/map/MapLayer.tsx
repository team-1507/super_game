import React, { useEffect, useMemo } from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';

type MapLayerProps = {
    layerConfig: number[],
};

const MapLayer = (props: MapLayerProps) => {
    const { layerConfig } = props;
    const spriteSheet = useMemo(() => new SpriteSheet(config), []);
    const tiles = layerConfig.map((tile, i) => {
        const row = Math.ceil((i + 1) / config.MAP_DIMENSIONS.width);
        const col = (i % config.MAP_DIMENSIONS.width) + 1;
        return {
            ref: React.createRef<HTMLCanvasElement>(),
            tileType: tile,
            row,
            col,
            key: `row-${row}-col-${col}`,
            id: `tile_row-${row}-col-${col}`,
        };
    });

    // useEffect(() => {
    //     tiles.forEach((tile) => {
    //         spriteSheet.drawTile(tile.tileType, tile.ref?.current);
    //     });
    // });
    // eslint-disable-next-line no-restricted-syntax
    for (const tile of tiles) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            spriteSheet.drawTile(tile.tileType, tile.ref?.current);
        }, [spriteSheet, tile.ref, tile.tileType]);
    }

    const canvasWidth = spriteSheet.TILE_SIZE.width * spriteSheet.TILE_SIZE.scale;
    const canvasHeight = spriteSheet.TILE_SIZE.height * spriteSheet.TILE_SIZE.scale;

    const canvases = tiles.map((tile) => {
        return (
            <canvas
                ref={tile.ref}
                key={tile.key}
                id={tile.id}
                width={canvasWidth}
                height={canvasHeight}
            />
        );
    });
    return (
        <div
            className="game-map-map_layer"
            style={{
                gridTemplateRows: `repeat(${config.MAP_DIMENSIONS.height}, ${canvasHeight}px)`,
                gridTemplateColumns: `repeat(${config.MAP_DIMENSIONS.width}, ${canvasWidth}px)`,
            }}
        >
            {canvases}
        </div>
    );
};

export default MapLayer;
