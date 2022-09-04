/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserApi from '../../api/user/user';
import { UserDto } from '../../api/user/types';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { getAvatar } from '../helpers';

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    UserApi.getCurrentUser,
);

export interface UserData {
    avatar?: string
    first_name?: string
    second_name?: string
    login: string
    email: string
    password?: string
    phone?: string
}

export interface UserState {
    data: UserData
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: SerializedError | null
}

export const initialState: UserState = {
    data: {
        avatar: '',
        first_name: '',
        second_name: '',
        login: '',
        email: '',
        password: '',
        phone: '',
    },
    status: 'idle',
    error: null

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserDto>) => {
            const { login, email, avatar } = action.payload;
            const { data } = state;
            data.login = login;
            data.email = email;
            data.avatar = getAvatar(avatar);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
          if (state.status === 'idle') {
            state.status = 'loading';
          }
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.data = { ...state.data, ...action.payload };
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        })
    },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state;
export default userSlice.reducer;
