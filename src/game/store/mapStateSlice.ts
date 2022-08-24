/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ASSET_TILE_TYPES, MAP } from '../map/config';

const plowedEarthAlias = 'SOIL_1';

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
            const tileTypeNum = Object
                .keys(ASSET_TILE_TYPES)
                .find(
                    (key) => ASSET_TILE_TYPES[Number.parseInt(key, 10)] === plowedEarthAlias,
                );
            if (tileTypeNum === undefined) {
                throw new Error(`Tile alias for ${plowedEarthAlias} not found`);
            }
            currentState[1][action.payload] = Number.parseInt(tileTypeNum, 10);
        },
    },
});

export const {
    plow,
} = mapStateSlice.actions;
export default mapStateSlice.reducer;
