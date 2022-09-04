/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ASSET_TILE_TYPES } from '../plants/config';
import * as constants from '../constants';
import Plant from '../plants/Plant';

export type PlantOrNone = Plant | number;

export type PlantAction = {
    plant: Plant;
    tileNum: number;
};

const mapLength = constants.MAP_SIZE[0] * constants.MAP_SIZE[1];
const initialState: PlantOrNone[] = [];
initialState.length = mapLength;
initialState.fill(0);

export const gardenStateSlice = createSlice({
    name: 'gardenState',
    initialState,
    reducers: {
        plow: (plants: PlantOrNone[], action: PayloadAction<number>) => {
            const tileAlias = Object
                .keys(ASSET_TILE_TYPES)
                .find(
                    (key) => ASSET_TILE_TYPES[Number.parseInt(key, 10)] === 'PLOWED_EARTH',
                );
            if (tileAlias === undefined) {
                throw new Error('Tile alias for PLOWED_EARTH not found');
            }
            plants[action.payload] = Number.parseInt(tileAlias, 10);
        },
        plant: (plantsState: PlantOrNone[], action: PayloadAction<PlantAction>) => {
            const { plant, tileNum } = action.payload;
            plantsState[tileNum] = plant;
        },
    },
});

export const {
    plow, plant,
} = gardenStateSlice.actions;
export default gardenStateSlice.reducer;
