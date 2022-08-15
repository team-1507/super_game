/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '.';
import { getAvatar } from './helpers';

export interface IUserState {
    avatar?: string
    first_name?: string
    second_name?: string
    login?: string
    email?: string
    password?: string
    phone?: string
}

export const initialState: IUserState = {
    avatar: '',
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    password: '',
    phone: '',

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserState>) => {
            const { login, email, avatar } = action.payload;
            state.login = login;
            state.email = email;
            state.avatar = getAvatar(avatar);
        },
    },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state;
export default userSlice.reducer;
