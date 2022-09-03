/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type Timer = {
    moves: number;
    actions: number;
    day: number;
    time: number;
    movesToday: number;
    actionsToday: number;
};

const initialState: Timer = {
    moves: 0,
    actions: 0,
    day: 1,
    time: 6 * 60 * 60 * 1000, // 06:00 am
    movesToday: 0,
    actionsToday: 0,
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        addMove: (timer: Timer) => {
            timer.moves += 1;
            timer.movesToday += 1;
        },
        addAction: (timer: Timer) => {
            timer.actions += 1;
            timer.actionsToday += 1;
        },
        addDay: (timer: Timer) => {
            timer.day += 1;
            timer.movesToday = 0;
            timer.actionsToday = 0;
        },
    },
});

export const {
    addMove, addAction, addDay,
} = timerSlice.actions;
export default timerSlice.reducer;
