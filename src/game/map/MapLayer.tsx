import React, { useEffect } from 'react';
import {
    SPRITE_SHEET, ASSET_TILE_COORDS, AssetTileTypes, TILE_SIZE, MAP_DIMENSIONS,
} from './config';

function getTileCoordsOnSptiteSheet(tileType: number) {
    const [row, coloumn] = ASSET_TILE_COORDS[AssetTileTypes[tileType]];
    const sourceX = (coloumn - 1) * (TILE_SIZE.width + TILE_SIZE.gap);
    const sourceY = (row - 1) * (TILE_SIZE.height + TILE_SIZE.gap);
    return {
        sourceX,
        sourceY,
        sourceWidth: TILE_SIZE.width,
        sourceHeight: TILE_SIZE.height,
    };
}

const sptitesheetImageElement = new Image();
sptitesheetImageElement.src = SPRITE_SHEET;

function drawTile(tileType: number, canvas: HTMLCanvasElement | null) {
    const img = sptitesheetImageElement.cloneNode() as HTMLImageElement;
    const ctx = canvas?.getContext('2d');
    const {
        sourceX, sourceY, sourceWidth, sourceHeight,
    } = getTileCoordsOnSptiteSheet(tileType);
    const [
        destX, destY, destWidth, destHeight,
    ] = [
        0, 0, TILE_SIZE.width * TILE_SIZE.scale, TILE_SIZE.height * TILE_SIZE.scale,
    ];
    img.onload = () => {
        if (!ctx) {
            return canvas;
        }
        ctx.imageSmoothingEnabled = false;
        return ctx.drawImage(
            img,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            destX,
            destY,
            destWidth,
            destHeight,
        );
    };
    return canvas;
}

type MapLayerProps = {
    layerConfig: number[],
};

const MapLayer = (props: MapLayerProps) => {
    const { layerConfig } = props;
    const tiles = layerConfig.map((tile, i) => {
        const row = Math.ceil((i + 1) / MAP_DIMENSIONS.width);
        const col = (i % MAP_DIMENSIONS.width) + 1;
        return {
            ref: React.createRef<HTMLCanvasElement>(),
            tileType: tile,
            row,
            col,
            key: `row-${row}-col-${col}`,
            id: `tile_row-${row}-col-${col}`,
        };
    });

    useEffect(() => {
        tiles.forEach((tile) => {
            drawTile(tile.tileType, tile.ref?.current);
        });
    });

    const canvasWidth = TILE_SIZE.width * TILE_SIZE.scale;
    const canvasHeight = TILE_SIZE.height * TILE_SIZE.scale;

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
                gridTemplateRows: `repeat(${MAP_DIMENSIONS.height}, ${canvasHeight}px)`,
                gridTemplateColumns: `repeat(${MAP_DIMENSIONS.width}, ${canvasWidth}px)`,
            }}
        >
            {canvases}
        </div>
    );
};

export default MapLayer;
