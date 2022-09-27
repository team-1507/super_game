/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const retrieveTheme = () => {
    let theme: string;
    try {
        theme = localStorage.getItem('theme') ?? 'default';
    } catch {
        theme = 'default';
    }
    return theme;
};

export interface ThemeState {
    theme: string;
}

export const initialState: ThemeState = {
    theme: retrieveTheme(),
};

const applyTheme = (theme: string) => {
    try {
        document.body.setAttribute('class', `theme-${theme}`);
        return true;
    } catch {
        return false;
    }
};

applyTheme(initialState.theme);

const themeSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeState>) => {
            const { theme } = action.payload;
            applyTheme(theme);
            localStorage.setItem('theme', theme);
            state.theme = theme;
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
