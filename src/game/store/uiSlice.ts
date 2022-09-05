/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type UI = {
    pauseMenu: boolean
};

const initialState: UI = {
    pauseMenu: false
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        togglePause: (ui: UI) => {
            ui.pauseMenu = !ui.pauseMenu
        },
    },
});

export const {
    togglePause,
} = uiSlice.actions;

export default uiSlice.reducer;
