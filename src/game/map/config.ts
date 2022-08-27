/* eslint-disable no-multi-spaces */
import sptitesheet from '../../../static/assets/map_sptitesheet.png';

export const SPRITE_SHEET = sptitesheet;

export const SPRITE_SIZE = {
    width: 16,
    height: 16, // in px on astual sptitesheet
    gap: 1, // between sprites
};

export const ASSET_TILE_TYPES: Record<number, string> = {
    0: 'EMPTY',
    1: 'GRASS_1',
    2: 'GRASS_2',
    3: 'SOIL_1',
    4: 'SOIL_2',
    5: 'TREE_SMALL',
    6: 'BUSH',
    20: 'SHORE_TOP_LEFT',
    21: 'SHORE_LEFT',
    22: 'SHORE_BOTTOM_LEFT',
    23: 'SHORE_TOP',
    24: 'WATER',
    25: 'SHORE_BOTTOM',
    26: 'SHORE_TOP_RIGHT',
    27: 'SHORE_RIGHT',
    28: 'SHORE_BOTTOM_RIGHT',
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
    BUSH: [10, 20],
    SHORE_TOP_LEFT: [1, 3],
    SHORE_LEFT: [2, 3],
    SHORE_BOTTOM_LEFT: [3, 3],
    SHORE_TOP: [1, 4],
    WATER: [2, 4],
    SHORE_BOTTOM: [3, 4],
    SHORE_TOP_RIGHT: [1, 5],
    SHORE_RIGHT: [2, 5],
    SHORE_BOTTOM_RIGHT: [3, 5],
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

export const MAP: [number[], number[]] = [
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
        1,  2,  1,  2,  1,  1,  2,  1,  2,  1,  1,  1,  1,  1,  2, 20, 23, 23, 26,  2,
        2,  1,  2,  1,  2,  2,  2,  2,  1,  1,  1,  2,  1,  2,  1, 21, 24, 24, 27,  2,
        1,  1,  1,  2,  2,  2,  1,  2,  1,  1,  2,  1,  2,  2,  1, 21, 24, 24, 27,  2,
        1,  2,  2,  1,  1,  1,  2,  2,  1,  1,  1,  2,  2,  2,  2, 21, 24, 24, 27,  2,
        2,  1,  1,  2,  1,  2,  2,  1,  1,  1,  1,  2,  2,  2,  1, 22, 25, 25, 28,  2,
        2,  1,  2,  2,  2,  2,  2,  2,  1,  2,  1,  2,  1,  2,  2,  1,  1,  2,  2,  1,
        2,  1,  2,  1,  1,  1,  2,  2,  1,  2,  2,  1,  1,  1,  2,  1,  1,  1,  1,  1,
        2,  2,  1,  2,  2,  1,  2,  2,  1,  1,  1,  2,  1,  1,  1,  2,  2,  1,  1,  1,
        2,  1,  2,  2,  1,  1,  2,  1,  1,  1,  1,  1,  1,  2,  1,  2,  2,  2,  1,  2,
        1,  1,  1,  1,  2,  1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  1,  2,  1,  1,  2,
    ],
    [ // layer 2:
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 41,  0, 42,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 39,  0, 40,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 36, 38, 37,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 46,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 45,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0,
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

export const BOUNDARIES: number[] = [
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
];

export default {
    MAP, SPRITE_SIZE, ASSET_TILE_COORDS, SPRITE_SHEET, ASSET_TILE_TYPES, BOUNDARIES,
};
