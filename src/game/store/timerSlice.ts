/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { whatDayIsItToday, whatTimeIsItNow } from '../../utils';
import { SUNRISE_TIMESTAMP, SUNSET_TIMESTAMP } from '../constants';

interface Timer {
    moves: number;
    actions: number;
    day: number;
    timestamp: number; // in minutes
    movesToday: number;
    actionsToday: number;
}

const initialState: Timer = {
    moves: 0,
    actions: 0,
    day: 1,
    timestamp: SUNRISE_TIMESTAMP,
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
        incrementTimestamp: (timer: Timer, action: PayloadAction<number>) => {
            const newTimestamp = timer.timestamp + action.payload;
            if (whatTimeIsItNow(newTimestamp) >= SUNSET_TIMESTAMP) { // it's a brand new day!
                timer.day = whatDayIsItToday(timer.timestamp) + 1;
                timer.timestamp = timer.day * 60 * 24 + SUNRISE_TIMESTAMP;
                timer.movesToday = 0;
                timer.actionsToday = 0;
            } else {
                timer.timestamp = newTimestamp;
            }
        },
        resetTimer: (timer: Timer) => {
            const { moves, actions, day, movesToday, actionsToday, timestamp } = initialState;

            timer.moves = moves;
            timer.actions = actions;
            timer.day = day;
            timer.movesToday = movesToday;
            timer.actionsToday = actionsToday;
            timer.timestamp = timestamp;
        },
    },
});

export const {
    addMove, addAction, addDay, incrementTimestamp, resetTimer,
} = timerSlice.actions;
export default timerSlice.reducer;
