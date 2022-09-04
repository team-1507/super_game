/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type UI = {
    pauseMenu: boolean;
    mute: boolean;
};

const initialState: UI = {
    pauseMenu: false,
    mute: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        togglePause: (ui: UI) => {
            ui.pauseMenu = !ui.pauseMenu;
        },
        toggleMute: (ui: UI) => {
            ui.mute = !ui.mute;
        },
    },
});

export const {
    togglePause,
    toggleMute,
} = uiSlice.actions;

export default uiSlice.reducer;
