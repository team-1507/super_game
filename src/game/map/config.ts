/* eslint-disable no-multi-spaces */
import sptitesheet from '../../../static/assets/map_sptitesheet.png';

export const SPRITE_SHEET = sptitesheet;

export const TILE_SIZE = {
    width: 16,
    height: 16, // in px on astual sptitesheet
    gap: 1, // between sprites
    scale: 4, // multiplier applied on rendering
};

export const ASSET_TILE_TYPES: Record<number, string> = {
    0: 'EMPTY',
    1: 'GRASS_1',
    2: 'GRASS_2',
    3: 'SOIL_1',
    4: 'SOIL_2',
    5: 'TREE_SMALL',
    30: 'WALL_MIDDLE',
    31: 'WALL_BOTTOM_LEFT',
    32: 'WALL_BOTTOM',
    33: 'WALL_BOTTOM_RIGHT',
    34: 'WALL_LEFT',
    35: 'WALL_RIGHT',
    36: 'ROOF_LEFT_BOTTOM',
    37: 'ROOF_RIGHT_BOTTOM',
    38: 'ROOF_CENTER_BOTTOM',
    39: 'ROOF_LEFT_CENTER',
    40: 'ROOF_RIGHT_CENTER',
    41: 'ROOF_LEFT_TOP',
    42: 'ROOF_RIGHT_TOP',
    43: 'ROOF_CENTER',
    44: 'ROOF_CENTER_TOP',
    45: 'DOOR',
    46: 'WINDOW',
};

/*
ASSET_COORDS: {
    TILE_TYPE: [row, coloumn]
}
*/
// export const ASSET_TILE_COORDS: Record<keyof typeof ASSET_TILE_TYPES, [number, number]> = {
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
    MAP_DIMENSIONS, MAP, TILE_SIZE, ASSET_TILE_COORDS, SPRITE_SHEET, ASSET_TILE_TYPES,
};
