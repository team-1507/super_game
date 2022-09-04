/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ASSET_TILE_TYPES, MAP } from '../map/config';

const plowedEarthAlias = 'SOIL_1';
export const plowedEarthTileType = Number.parseInt(
    String(Object
        .keys(ASSET_TILE_TYPES)
        .find(
            (key) => ASSET_TILE_TYPES[Number.parseInt(key, 10)] === plowedEarthAlias,
        )),
    10,
);

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
    },
});

export const {
    plow,
} = mapStateSlice.actions;
export default mapStateSlice.reducer;
