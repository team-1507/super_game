import sptitesheet from '../../../static/assets/plants_sptitesheet.png';

export const SPRITE_SHEET = sptitesheet;

export const SPRITE_SIZE = {
    width: 32,
    height: 64, // in px on astual sptitesheet
    gap: 1, // between sprites
};

export const ASSET_TILE_TYPES: Record<number, string> = {
    1: 'TOMATOES_1',
    2: 'TOMATOES_2',
    3: 'TOMATOES_3',
    4: 'TOMATOES_4',
    5: 'TOMATOES_5',
    6: 'TOMATOES_6',
    11: 'POTATOES_1',
    12: 'POTATOES_2',
    13: 'POTATOES_3',
    14: 'POTATOES_4',
    15: 'POTATOES_5',
    16: 'POTATOES_6',
    21: 'CARROT_1',
    22: 'CARROT_2',
    23: 'CARROT_3',
    24: 'CARROT_4',
    25: 'CARROT_5',
    26: 'CARROT_6',
    31: 'CABBAGE_1',
    32: 'CABBAGE_2',
    33: 'CABBAGE_3',
    34: 'CABBAGE_4',
    35: 'CABBAGE_5',
    36: 'CABBAGE_6',
    41: 'PEPPER_1',
    42: 'PEPPER_2',
    43: 'PEPPER_3',
    44: 'PEPPER_4',
    45: 'PEPPER_5',
    46: 'PEPPER_6',
    51: 'SQUASH_1',
    52: 'SQUASH_2',
    53: 'SQUASH_3',
    54: 'SQUASH_4',
    55: 'SQUASH_5',
    56: 'SQUASH_6',
    61: 'CORN_1',
    62: 'CORN_2',
    63: 'CORN_3',
    64: 'CORN_4',
    65: 'CORN_5',
    66: 'CORN_6',
};

/*
ASSET_COORDS: {
    TILE_TYPE: [row, coloumn]
}
*/
// export const ASSET_TILE_COORDS: Record<keyof typeof ASSET_TILE_TYPES, [number, number]> = {
export const ASSET_TILE_COORDS: Record<string, [number, number]> = {
    FRONT_1: [1, 1],
};

export default {
    SPRITE_SIZE, ASSET_TILE_COORDS, SPRITE_SHEET, ASSET_TILE_TYPES,
};
