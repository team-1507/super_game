import spritesheet from '../../../static/assets/character_spritesheet.png';

export const SPRITE_SHEET = spritesheet;

export const SPRITE_SIZE = {
    width: 16,
    height: 24, // in px on astual spritesheet
    gap: 0, // between sprites
};

export const ASSET_TILE_TYPES: Record<number, string> = {
    1: 'FRONT_1',
    2: 'FRONT_2',
    3: 'FRONT_3',
    4: 'FRONT_4',
    5: 'RIGHT_1',
    6: 'RIGHT_2',
    7: 'RIGHT_3',
    8: 'RIGHT_4',
    9: 'LEFT_1',
    10: 'LEFT_2',
    11: 'LEFT_3',
    12: 'LEFT_4',
    13: 'REAR_1',
    14: 'REAR_2',
    15: 'REAR_3',
    16: 'REAR_4',
};

/*
ASSET_COORDS: {
    TILE_TYPE: [row, coloumn]
}
*/
// export const ASSET_TILE_COORDS: Record<keyof typeof ASSET_TILE_TYPES, [number, number]> = {
export const ASSET_TILE_COORDS: Record<string, [number, number]> = {
    FRONT_1: [1, 1],
    FRONT_2: [1, 2],
    FRONT_3: [1, 3],
    FRONT_4: [1, 4],
    RIGHT_1: [2, 1],
    RIGHT_2: [2, 2],
    RIGHT_3: [2, 3],
    RIGHT_4: [2, 4],
    LEFT_1: [3, 1],
    LEFT_2: [3, 2],
    LEFT_3: [3, 3],
    LEFT_4: [3, 4],
    REAR_1: [4, 1],
    REAR_2: [4, 2],
    REAR_3: [4, 3],
    REAR_4: [4, 4],
};

export default {
    SPRITE_SIZE, ASSET_TILE_COORDS, SPRITE_SHEET, ASSET_TILE_TYPES,
};
