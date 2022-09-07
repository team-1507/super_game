/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as constants from '../constants';
import Plant from '../plants/Plant';

export type PlantOrNone = Plant | number;

export type PlantAction = {
    plant: Plant;
    tileNum: number;
};

export type HarvestAction = {
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
        plant: (plantsState: PlantOrNone[], action: PayloadAction<PlantAction>) => {
            const { plant, tileNum } = action.payload;
            plantsState[tileNum] = plant;
        },
        harvest: (plantsState: PlantOrNone[], action: PayloadAction<HarvestAction>) => {
            const { tileNum } = action.payload;
            plantsState[tileNum] = 0;
        },
    },
});

export const {
    plant,
    harvest,
} = gardenStateSlice.actions;
export default gardenStateSlice.reducer;
