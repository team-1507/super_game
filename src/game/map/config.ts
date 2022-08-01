/* eslint-disable no-multi-spaces */
import sptitesheet from '../../../static/assets/sptitesheet.png';

export const SPRITE_SHEET = sptitesheet;

export const TILE_SIZE = {
    width: 16,
    height: 16, // in px on astual sptitesheet
    gap: 1, // between sprites
    scale: 4, // multiplier applied on rendering
};

export enum AssetTileTypes {
    EMPTY = 0,
    GRASS_1 = 1,
    GRASS_2 = 2,
    SOIL_1 = 3,
    SOIL_2 = 4,
    TREE_SMALL = 5,
    WALL_MIDDLE = 30,
    WALL_BOTTOM_LEFT = 31,
    WALL_BOTTOM = 32,
    WALL_BOTTOM_RIGHT = 33,
    WALL_LEFT = 34,
    WALL_RIGHT = 35,
    ROOF_LEFT_BOTTOM = 36,
    ROOF_RIGHT_BOTTOM = 37,
    ROOF_CENTER_BOTTOM = 38,
    ROOF_LEFT_CENTER = 39,
    ROOF_RIGHT_CENTER = 40,
    ROOF_LEFT_TOP = 41,
    ROOF_RIGHT_TOP = 42,
    ROOF_CENTER = 43,
    ROOF_CENTER_TOP = 44,
    DOOR = 45,
    WINDOW = 46,
}

/*
ASSET_COORDS: {
    TILE_TYPE: [row, coloumn]
}
*/
// export const ASSET_TILE_COORDS: Record<keyof typeof AssetTileTypes, [number, number]> = {
export const ASSET_TILE_COORDS: Record<string, [number, number]> = {
    EMPTY: [6, 1],
    GRASS_1: [1, 6],
    GRASS_2: [2, 6],
    SOIL_1: [1, 7],
    SOIL_2: [2, 7],
    TREE_SMALL: [10, 14],
    WALL_MIDDLE: [16, 19],
    WALL_BOTTOM_LEFT: [16, 15],
    WALL_BOTTOM: [16, 14],
    WALL_BOTTOM_RIGHT: [16, 17],
    WALL_LEFT: [16, 18],
    WALL_RIGHT: [16, 20],
    ROOF_LEFT_BOTTOM: [24, 21],
    ROOF_RIGHT_BOTTOM: [24, 22],
    ROOF_CENTER_BOTTOM: [23, 23],
    ROOF_LEFT_CENTER: [23, 21],
    ROOF_RIGHT_CENTER: [23, 22],
    ROOF_LEFT_TOP: [22, 21],
    ROOF_RIGHT_TOP: [22, 22],
    ROOF_CENTER: [23, 26],
    ROOF_CENTER_TOP: [22, 26],
    DOOR: [1, 33],
    WINDOW: [2, 43],
};

export const MAP_DIMENSIONS = { // in tiles
    width: 20,
    height: 20,
};

export const MAP = [
    [ // layer 1:
        2,  2,  2,  1,  2,  1,  1,  1,  2,  1,  1,  2,  1,  2,  2,  1,  2,  2,  1,  2,
        1,  1,  1,  2,  1,  2,  2,  2,  2,  1,  2,  2,  1,  2,  1,  2,  2,  2,  2,  2,
        1,  2,  2,  2,  1,  2,  2,  1,  1,  2,  1,  2,  2,  2,  1,  2,  1,  1,  2,  1,
        2,  1,  2,  2,  2,  1,  1,  2,  1,  1,  1,  1,  2,  2,  2, 44,  1,  2,  1,  1,
        2,  2,  2,  2,  1,  1,  2,  2,  1,  2,  1,  1,  2,  1,  2, 43,  1,  2,  1,  1,
        1,  2,  1,  2,  2,  1,  2,  1,  1,  1,  1,  1,  2,  2, 30, 30, 30,  2,  2,  2,
        1,  1,  2,  2,  2,  1,  2,  1,  1,  2,  2,  2,  2,  2, 34, 30, 35,  1,  2,  2,
        1,  1,  2,  2,  2,  2,  2,  1,  2,  2,  1,  1,  2,  1, 31, 32, 33,  1,  1,  1,
        2,  2,  2,  1,  1,  1,  2,  2,  1,  1,  2,  1,  1,  1,  1,  2,  1,  2,  2,  1,
        1,  1,  2,  1,  1,  2,  2,  2,  1,  2,  1,  1,  2,  2,  1,  1,  1,  2,  1,  1,
        1,  2,  1,  2,  1,  1,  2,  1,  2,  1,  1,  1,  1,  1,  2,  2,  2,  2,  1,  1,
        2,  1,  2,  1,  2,  2,  2,  2,  1,  1,  1,  2,  1,  2,  1,  2,  1,  1,  1,  2,
        1,  1,  1,  2,  2,  2,  1,  2,  1,  1,  2,  1,  2,  2,  1,  1,  2,  1,  2,  2,
        1,  2,  2,  1,  1,  1,  2,  2,  1,  1,  1,  2,  2,  2,  2,  1,  2,  2,  2,  2,
        2,  1,  1,  2,  1,  2,  2,  1,  1,  1,  1,  2,  2,  2,  1,  1,  1,  2,  1,  1,
        2,  1,  2,  2,  2,  2,  2,  2,  1,  2,  1,  2,  1,  2,  2,  1,  1,  2,  2,  1,
        2,  1,  2,  1,  1,  1,  2,  2,  1,  2,  2,  1,  1,  1,  2,  1,  1,  1,  1,  1,
        2,  2,  1,  2,  2,  1,  2,  2,  1,  1,  1,  2,  1,  1,  1,  2,  2,  1,  1,  1,
        2,  1,  2,  2,  1,  1,  2,  1,  1,  1,  1,  1,  1,  2,  1,  2,  2,  2,  1,  2,
        1,  1,  1,  1,  2,  1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  1,  2,  1,  1,  2,
    ],
    [ // layer 2:
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  5,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 41,  0, 42,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 39,  0, 40,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 36,  38, 37,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  46,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  45,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
];

export default {
    MAP_DIMENSIONS, MAP, TILE_SIZE, ASSET_TILE_COORDS, SPRITE_SHEET, AssetTileTypes,
};
