import sptitesheet from '../../../static/assets/character_sptitesheet.png';

export const SPRITE_SHEET = sptitesheet;

export const TILE_SIZE = {
    width: 16,
    height: 24, // in px on astual sptitesheet
    gap: 0, // between sprites
    scale: 4, // multiplier applied on rendering
};

/*
ASSET_COORDS: {
    TILE_TYPE: [row, coloumn]
}
*/
// export const ASSET_TILE_COORDS: Record<keyof typeof AssetTileTypes, [number, number]> = {
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
    TILE_SIZE, ASSET_TILE_COORDS, SPRITE_SHEET,
};
