/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Position = [number, number];

const initialState: Position = [5, 5];

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        up: (position) => {
            position[0] -= 1;
        },
        down: (position) => {
            position[0] += 1;
        },
        left: (position) => {
            position[1] -= 1;
        },
        right: (position) => {
            position[1] += 1;
        },
        setPosition: (position, action: PayloadAction<Position>) => {
            [position[0], position[1]] = action.payload;
        },
    },
});

export const {
    up, down, left, right, setPosition,
} = characterSlice.actions;
export default characterSlice.reducer;
