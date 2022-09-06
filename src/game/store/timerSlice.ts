/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const tickTimer = createAsyncThunk(
    'timer/tickTimer',
    () => new Promise(resolve => {
        return resolve;
    }),
);

interface Timer {
    moves: number;
    actions: number;
    day: number;
    timer: {
        hours: number;
        minutes: number;
    };
    speedTime: number;
    pause: boolean;
    movesToday: number;
    actionsToday: number;
};

const initialState: Timer = {
    moves: 0,
    actions: 0,
    day: 1,
    timer: {
        hours: 6,
        minutes: 0,
    },
    speedTime: 60,
    pause: false,
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
        togglePause: (timer: Timer) => {
            timer.pause = !timer.pause;
        },
        tickMinute: (timer: Timer) => {
            const { minutes, hours } = timer.timer;
            if (minutes >= 59) {
                timer.timer.minutes = 0;
                timer.timer.hours += 1;

                if (hours > 23) {
                    timer.timer.hours = 6;
                    timer.day += 1;
                }
            } else {
                timer.timer.minutes += 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(tickTimer.pending, (state, action) => {
            console.warn('pending', state, action);
        });
    },
});

export const {
    addMove, addAction, addDay, togglePause, tickMinute,
} = timerSlice.actions;
export default timerSlice.reducer;
