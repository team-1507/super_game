import sptitesheet from '../../../static/assets/plants_sptitesheet.png';

export const SPRITE_SHEET = sptitesheet;

export const SPRITE_SIZE = {
    width: 32,
    height: 64, // in px on astual sptitesheet
    gap: 1, // between sprites
};

export const ASSET_TILE_TYPES: Record<number, string> = {
    1: 'PLOWED_EARTH',
    11: 'TOMATOES_1',
    12: 'TOMATOES_2',
    13: 'TOMATOES_3',
    14: 'TOMATOES_4',
    15: 'TOMATOES_5',
    16: 'TOMATOES_6',
    21: 'POTATOES_1',
    22: 'POTATOES_2',
    23: 'POTATOES_3',
    24: 'POTATOES_4',
    25: 'POTATOES_5',
    26: 'POTATOES_6',
    31: 'CARROT_1',
    32: 'CARROT_2',
    33: 'CARROT_3',
    34: 'CARROT_4',
    35: 'CARROT_5',
    36: 'CARROT_6',
    41: 'CABBAGE_1',
    42: 'CABBAGE_2',
    43: 'CABBAGE_3',
    44: 'CABBAGE_4',
    45: 'CABBAGE_5',
    46: 'CABBAGE_6',
    51: 'PEPPER_1',
    52: 'PEPPER_2',
    53: 'PEPPER_3',
    54: 'PEPPER_4',
    55: 'PEPPER_5',
    56: 'PEPPER_6',
    61: 'SQUASH_1',
    62: 'SQUASH_2',
    63: 'SQUASH_3',
    64: 'SQUASH_4',
    65: 'SQUASH_5',
    66: 'SQUASH_6',
    71: 'CORN_1',
    72: 'CORN_2',
    73: 'CORN_3',
    74: 'CORN_4',
    75: 'CORN_5',
    76: 'CORN_6',
};

/*
ASSET_COORDS: {
    TILE_TYPE: [row, coloumn]
}
*/
export const ASSET_TILE_COORDS: Record<string, [number, number]> = {
    PLOWED_EARTH: [5, 2],
    TOMATOES_1: [1, 1],
    TOMATOES_2: [2, 1],
    TOMATOES_3: [3, 1],
    TOMATOES_4: [4, 1],
    TOMATOES_5: [5, 1],
    TOMATOES_6: [6, 1],
    POTATOES_1: [1, 2],
    POTATOES_2: [2, 2],
    POTATOES_3: [3, 2],
    POTATOES_4: [4, 2],
    POTATOES_5: [5, 2],
    POTATOES_6: [6, 2],
    CARROT_1: [1, 3],
    CARROT_2: [2, 3],
    CARROT_3: [3, 3],
    CARROT_4: [4, 3],
    CARROT_5: [5, 3],
    CARROT_6: [6, 3],
    CABBAGE_1: [1, 4],
    CABBAGE_2: [2, 4],
    CABBAGE_3: [3, 4],
    CABBAGE_4: [4, 4],
    CABBAGE_5: [5, 4],
    CABBAGE_6: [6, 4],
    PEPPER_1: [1, 5],
    PEPPER_2: [2, 5],
    PEPPER_3: [3, 5],
    PEPPER_4: [4, 5],
    PEPPER_5: [5, 5],
    PEPPER_6: [6, 5],
    SQUASH_1: [1, 6],
    SQUASH_2: [2, 6],
    SQUASH_3: [3, 6],
    SQUASH_4: [4, 6],
    SQUASH_5: [5, 6],
    SQUASH_6: [6, 6],
    CORN_1: [1, 7],
    CORN_2: [2, 7],
    CORN_3: [3, 7],
    CORN_4: [4, 7],
    CORN_5: [5, 7],
    CORN_6: [6, 7],
};

export default {
    SPRITE_SIZE, ASSET_TILE_COORDS, SPRITE_SHEET, ASSET_TILE_TYPES,
};
