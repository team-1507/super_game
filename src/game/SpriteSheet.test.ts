import { ISpriteSheet, SpriteSheet } from './SpriteSheet';

const mockConfig: ISpriteSheet = {
    SPRITE_SHEET: '',
    SPRITE_SIZE: {
        width: 16,
        height: 24,
        gap: 3,
    },
    ASSET_TILE_TYPES: {
        1: 'MOCK_TYPE',
    },
    ASSET_TILE_COORDS: {
        MOCK_TYPE: [1, 1],
    },
    MAP_SIZE: [10, 10],
    TILE_SIZE: 30,
    BOUNDARIES: []
};

describe('SpriteSheet class', () => {
    const ss = new SpriteSheet(mockConfig);

    test('tileNumToCoords should return correct [row, col] array', () => {
        expect(ss.tileNumToCoords(5)).toEqual([1, 6]);
        expect(ss.tileNumToCoords(43)).toEqual([5, 4]);
    });

    test('coordsToTileNum should return correct number starting from 0', () => {
        expect(ss.coordsToTileNum([1, 6])).toBe(5);
        expect(ss.coordsToTileNum([5, 4])).toBe(43);
    });
});
