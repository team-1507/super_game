/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ASSET_TILE_TYPES, MAP } from '../map/config';

const plowedEarthAlias = 'SOIL_1';
const waterEarthAlias = 'PLOWED_SOIL_1';

const findTileType = (alias: string) => Number.parseInt(
    String(Object
        .keys(ASSET_TILE_TYPES)
        .find(
            (key) => ASSET_TILE_TYPES[Number.parseInt(key, 10)] === alias,
        )),
    10,
);

export const plowedEarthTileType = findTileType(plowedEarthAlias);
export const waterEarthTileType = findTileType(waterEarthAlias);

type MapConfig = [
    number[],
    number[],
];

const initialState: MapConfig = MAP;

export const mapStateSlice = createSlice({
    name: 'mapState',
    initialState,
    reducers: {
        plow: (currentState: MapConfig, action: PayloadAction<number>) => {
            if (Number.isNaN(plowedEarthTileType)) {
                throw new Error(`Tile alias for ${plowedEarthAlias} not found`);
            }
            currentState[1][action.payload] = plowedEarthTileType;
        },
        water: (currentState: MapConfig, action: PayloadAction<number>) => {
            if (Number.isNaN(waterEarthTileType)) {
                throw new Error(`Tile alias for ${waterEarthAlias} not found`);
            }
            currentState[1][action.payload] = waterEarthTileType;
        },
        resetMap: (currentState: MapConfig) => {
            currentState = initialState;
        },
    },
});

export const {
    plow,
    water,
    resetMap,
} = mapStateSlice.actions;
export default mapStateSlice.reducer;
